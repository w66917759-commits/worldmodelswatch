create extension if not exists pgcrypto;

create schema if not exists private;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(btrim(display_name)) between 1 and 120),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  target_path text not null check (
    target_path = '/faq'
    or target_path ~ '^/(news|models|compare)/[a-z0-9-]+$'
  ),
  user_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.comment_likes (
  comment_id uuid not null references public.comments(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (comment_id, user_id)
);

create index if not exists comments_target_visible_created_idx
  on public.comments (target_path, created_at)
  where deleted_at is null;

create index if not exists comments_user_id_idx
  on public.comments (user_id);

create index if not exists comment_likes_user_id_idx
  on public.comment_likes (user_id);

create or replace function private.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
before update on public.profiles
for each row
execute function private.touch_updated_at();

drop trigger if exists comments_touch_updated_at on public.comments;
create trigger comments_touch_updated_at
before update on public.comments
for each row
execute function private.touch_updated_at();

create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(
      nullif(new.raw_user_meta_data ->> 'full_name', ''),
      nullif(new.raw_user_meta_data ->> 'name', ''),
      nullif(split_part(new.email, '@', 1), ''),
      'World Models Watch reader'
    ),
    coalesce(
      nullif(new.raw_user_meta_data ->> 'avatar_url', ''),
      nullif(new.raw_user_meta_data ->> 'picture', '')
    )
  )
  on conflict (id) do update set
    display_name = excluded.display_name,
    avatar_url = excluded.avatar_url,
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function private.handle_new_user();

alter table public.profiles enable row level security;
alter table public.comments enable row level security;
alter table public.comment_likes enable row level security;

grant usage on schema public to anon, authenticated;

grant select on public.profiles to anon, authenticated;
grant insert (id, display_name, avatar_url) on public.profiles to authenticated;
grant update (display_name, avatar_url, updated_at) on public.profiles to authenticated;

grant select on public.comments to anon, authenticated;
grant insert (target_path, user_id, body) on public.comments to authenticated;
grant update (deleted_at, updated_at) on public.comments to authenticated;

grant select, insert, delete on public.comment_likes to authenticated;

drop policy if exists "Profiles are readable" on public.profiles;
create policy "Profiles are readable"
on public.profiles
for select
using (true);

drop policy if exists "Users can insert their profile" on public.profiles;
create policy "Users can insert their profile"
on public.profiles
for insert
to authenticated
with check ((select auth.uid()) = id);

drop policy if exists "Users can update their profile" on public.profiles;
create policy "Users can update their profile"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

drop policy if exists "Visible comments are readable" on public.comments;
create policy "Visible comments are readable"
on public.comments
for select
using (deleted_at is null);

drop policy if exists "Users can insert their comments" on public.comments;
create policy "Users can insert their comments"
on public.comments
for insert
to authenticated
with check (
  (select auth.uid()) = user_id
  and deleted_at is null
  and char_length(btrim(body)) between 1 and 2000
);

drop policy if exists "Users can soft delete their comments" on public.comments;
create policy "Users can soft delete their comments"
on public.comments
for update
to authenticated
using ((select auth.uid()) = user_id and deleted_at is null)
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can read their likes" on public.comment_likes;
create policy "Users can read their likes"
on public.comment_likes
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can like visible comments" on public.comment_likes;
create policy "Users can like visible comments"
on public.comment_likes
for insert
to authenticated
with check (
  (select auth.uid()) = user_id
  and exists (
    select 1
    from public.comments
    where comments.id = comment_likes.comment_id
      and comments.deleted_at is null
  )
);

drop policy if exists "Users can remove their likes" on public.comment_likes;
create policy "Users can remove their likes"
on public.comment_likes
for delete
to authenticated
using ((select auth.uid()) = user_id);

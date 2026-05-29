import "server-only";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseAdminConfig } from "@/lib/supabase/config";
import { getSupabaseUser } from "@/lib/supabase/server";

type CommentProfile = {
  id: string;
  display_name: string;
  avatar_url: string | null;
};

type RawComment = {
  id: string;
  target_path: string;
  user_id: string;
  body: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  profiles: CommentProfile | CommentProfile[] | null;
};

type RawLike = {
  comment_id: string;
  user_id: string;
};

export type CommentThreadUser = {
  id: string;
  displayName: string;
  avatarUrl: string | null;
};

export type CommentThreadComment = {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  author: CommentThreadUser;
  likeCount: number;
  likedByCurrentUser: boolean;
  canDelete: boolean;
};

export type CommentThreadData = {
  targetPath: string;
  configured: boolean;
  missing: string[];
  currentUser: CommentThreadUser | null;
  comments: CommentThreadComment[];
  error: string | null;
};

function normalizeProfile(profile: RawComment["profiles"], userId: string) {
  const value = Array.isArray(profile) ? profile[0] : profile;

  return {
    id: value?.id ?? userId,
    displayName: value?.display_name ?? "World Models Watch reader",
    avatarUrl: value?.avatar_url ?? null,
  };
}

export async function getCommentThread(
  targetPath: string,
): Promise<CommentThreadData> {
  const config = getSupabaseAdminConfig();
  const authState = await getSupabaseUser();
  const currentUser = authState.user
    ? {
        id: authState.user.id,
        displayName: authState.user.displayName,
        avatarUrl: authState.user.avatarUrl,
      }
    : null;

  if (!config.configured) {
    return {
      targetPath,
      configured: false,
      missing: config.missing,
      currentUser,
      comments: [],
      error: null,
    };
  }

  const supabase = createSupabaseAdminClient();

  if (!supabase) {
    return {
      targetPath,
      configured: false,
      missing: config.missing,
      currentUser,
      comments: [],
      error: null,
    };
  }

  const { data: comments, error: commentError } = await supabase
    .from("comments")
    .select(
      "id,target_path,user_id,body,created_at,updated_at,deleted_at,profiles(id,display_name,avatar_url)",
    )
    .eq("target_path", targetPath)
    .is("deleted_at", null)
    .order("created_at", { ascending: true });

  if (commentError) {
    return {
      targetPath,
      configured: true,
      missing: [],
      currentUser,
      comments: [],
      error: "Comments could not be loaded.",
    };
  }

  const rawComments = (comments ?? []) as RawComment[];
  const commentIds = rawComments.map((comment) => comment.id);
  const likeCounts = new Map<string, number>();
  const currentUserLikes = new Set<string>();

  if (commentIds.length > 0) {
    const { data: likes } = await supabase
      .from("comment_likes")
      .select("comment_id,user_id")
      .in("comment_id", commentIds);

    ((likes ?? []) as RawLike[]).forEach((like) => {
      likeCounts.set(like.comment_id, (likeCounts.get(like.comment_id) ?? 0) + 1);
      if (currentUser?.id === like.user_id) {
        currentUserLikes.add(like.comment_id);
      }
    });
  }

  return {
    targetPath,
    configured: true,
    missing: [],
    currentUser,
    comments: rawComments.map((comment) => ({
      id: comment.id,
      body: comment.body,
      createdAt: comment.created_at,
      updatedAt: comment.updated_at,
      author: normalizeProfile(comment.profiles, comment.user_id),
      likeCount: likeCounts.get(comment.id) ?? 0,
      likedByCurrentUser: currentUserLikes.has(comment.id),
      canDelete: currentUser?.id === comment.user_id,
    })),
    error: null,
  };
}

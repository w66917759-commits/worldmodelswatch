"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  sanitizeCommentTargetPath,
  sanitizePublicRedirect,
} from "@/lib/public-routes";
import { createSupabaseServerClient, getSupabaseUser } from "@/lib/supabase/server";

const maxCommentLength = 2000;

export type CommentFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  body?: string;
};

function normalizeCommentBody(value: FormDataEntryValue | string | null) {
  if (typeof value !== "string") return "";
  return value.trim();
}

async function ensureProfile() {
  const supabase = await createSupabaseServerClient();
  const authState = await getSupabaseUser();

  if (!supabase || !authState.user) {
    return {
      supabase,
      user: null,
      error: "Sign in with Google before commenting.",
    };
  }

  const { error } = await supabase.from("profiles").upsert(
    {
      id: authState.user.id,
      display_name: authState.user.displayName,
      avatar_url: authState.user.avatarUrl,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" },
  );

  if (error) {
    return {
      supabase,
      user: authState.user,
      error: "Your profile could not be prepared for commenting.",
    };
  }

  return { supabase, user: authState.user, error: null };
}

export async function createComment(targetPath: string, body: string) {
  const cleanTargetPath = sanitizeCommentTargetPath(targetPath);
  const cleanBody = normalizeCommentBody(body);

  if (!cleanTargetPath) {
    return {
      status: "error",
      message: "This page does not accept comments.",
      body: cleanBody,
    } satisfies CommentFormState;
  }

  if (!cleanBody) {
    return {
      status: "error",
      message: "Write a comment before publishing.",
      body: cleanBody,
    } satisfies CommentFormState;
  }

  if (cleanBody.length > maxCommentLength) {
    return {
      status: "error",
      message: `Comments must be ${maxCommentLength} characters or fewer.`,
      body: cleanBody,
    } satisfies CommentFormState;
  }

  const { supabase, user, error: profileError } = await ensureProfile();

  if (!supabase || !user || profileError) {
    return {
      status: "error",
      message: profileError ?? "Sign in with Google before commenting.",
      body: cleanBody,
    } satisfies CommentFormState;
  }

  const { error } = await supabase.from("comments").insert({
    target_path: cleanTargetPath,
    user_id: user.id,
    body: cleanBody,
  });

  if (error) {
    return {
      status: "error",
      message: "The comment could not be published.",
      body: cleanBody,
    } satisfies CommentFormState;
  }

  revalidatePath(cleanTargetPath);

  return {
    status: "success",
    message: "Comment published.",
    body: "",
  } satisfies CommentFormState;
}

export async function submitCommentAction(
  _previousState: CommentFormState,
  formData: FormData,
): Promise<CommentFormState> {
  return createComment(
    String(formData.get("targetPath") ?? ""),
    String(formData.get("body") ?? ""),
  );
}

export async function deleteOwnComment(formData: FormData) {
  const commentId = String(formData.get("commentId") ?? "");
  const targetPath = sanitizeCommentTargetPath(formData.get("targetPath"));
  const supabase = await createSupabaseServerClient();
  const authState = await getSupabaseUser();

  if (!targetPath || !commentId || !supabase || !authState.user) {
    redirect(`${sanitizePublicRedirect(targetPath, "/")}#comments`);
  }

  const now = new Date().toISOString();
  await supabase
    .from("comments")
    .update({
      deleted_at: now,
      updated_at: now,
    })
    .eq("id", commentId)
    .eq("user_id", authState.user.id);

  revalidatePath(targetPath);
  redirect(`${targetPath}#comments`);
}

export async function toggleCommentLike(formData: FormData) {
  const commentId = String(formData.get("commentId") ?? "");
  const targetPath = sanitizeCommentTargetPath(formData.get("targetPath"));
  const supabase = await createSupabaseServerClient();
  const authState = await getSupabaseUser();

  if (!targetPath || !commentId || !supabase || !authState.user) {
    redirect(`${sanitizePublicRedirect(targetPath, "/")}#comments`);
  }

  const { data: existing } = await supabase
    .from("comment_likes")
    .select("comment_id")
    .eq("comment_id", commentId)
    .eq("user_id", authState.user.id)
    .maybeSingle();

  if (existing) {
    await supabase
      .from("comment_likes")
      .delete()
      .eq("comment_id", commentId)
      .eq("user_id", authState.user.id);
  } else {
    await supabase.from("comment_likes").insert({
      comment_id: commentId,
      user_id: authState.user.id,
    });
  }

  revalidatePath(targetPath);
  redirect(`${targetPath}#comments`);
}

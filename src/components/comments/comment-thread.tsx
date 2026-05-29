import Link from "next/link";
import { Heart, MessageSquare, Trash2 } from "lucide-react";

import {
  deleteOwnComment,
  toggleCommentLike,
} from "@/lib/comment-actions";
import { getCommentThread } from "@/lib/comments";
import { CommentComposer } from "./comment-composer";
import { signOutSupabaseAction } from "@/app/auth/actions";

type CommentThreadProps = {
  targetPath: string;
  title?: string;
  description?: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export async function CommentThread({
  targetPath,
  title = "Reader discussion",
  description = "Add source-backed corrections, questions, or notes for this page.",
}: CommentThreadProps) {
  const thread = await getCommentThread(targetPath);

  return (
    <section className="comment-thread" id="comments" aria-labelledby="comments-title">
      <div className="comment-thread-header">
        <div>
          <p className="eyebrow">Discussion</p>
          <h2 id="comments-title">{title}</h2>
          <p>{description}</p>
        </div>
        <span className="comment-count">
          <MessageSquare size={16} aria-hidden="true" />
          {thread.comments.length} comments
        </span>
      </div>

      {!thread.configured ? (
        <div className="comment-auth-panel" role="status">
          Comments are ready in the codebase. Configure{" "}
          {thread.missing.join(", ")} to enable Supabase-backed discussion in
          production.
        </div>
      ) : thread.currentUser ? (
        <div className="comment-auth-panel">
          <span>Signed in as {thread.currentUser.displayName}</span>
          <form action={signOutSupabaseAction}>
            <input name="next" type="hidden" value={`${targetPath}#comments`} />
            <button className="text-button" type="submit">
              Sign out
            </button>
          </form>
        </div>
      ) : (
        <div className="comment-auth-panel">
          <span>Sign in with Google to comment or like reader notes.</span>
          <Link className="button secondary" href={`/auth/sign-in?next=${targetPath}%23comments`}>
            Sign in
          </Link>
        </div>
      )}

      {thread.error ? (
        <p className="form-error" role="alert">
          {thread.error}
        </p>
      ) : null}

      {thread.currentUser && thread.configured ? (
        <CommentComposer targetPath={targetPath} />
      ) : null}

      <div className="comment-list">
        {thread.comments.length === 0 ? (
          <p className="empty-comments">
            No comments yet. Start with a source note or a question for future
            coverage.
          </p>
        ) : (
          thread.comments.map((comment) => (
            <article className="comment-card" key={comment.id}>
              <div className="comment-avatar" aria-hidden="true">
                {comment.author.avatarUrl ? (
                  <img
                    alt=""
                    src={comment.author.avatarUrl}
                  />
                ) : (
                  <span>{initials(comment.author.displayName) || "W"}</span>
                )}
              </div>
              <div className="comment-content">
                <div className="comment-meta">
                  <strong>{comment.author.displayName}</strong>
                  <span>{formatDate(comment.createdAt)}</span>
                </div>
                <p>{comment.body}</p>
                <div className="comment-actions">
                  {thread.currentUser ? (
                    <form action={toggleCommentLike}>
                      <input name="targetPath" type="hidden" value={targetPath} />
                      <input name="commentId" type="hidden" value={comment.id} />
                      <button
                        className={[
                          "comment-like-button",
                          comment.likedByCurrentUser ? "is-liked" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        type="submit"
                      >
                        <Heart size={15} aria-hidden="true" />
                        {comment.likeCount}
                      </button>
                    </form>
                  ) : (
                    <span className="comment-like-button">
                      <Heart size={15} aria-hidden="true" />
                      {comment.likeCount}
                    </span>
                  )}

                  {comment.canDelete ? (
                    <form action={deleteOwnComment}>
                      <input name="targetPath" type="hidden" value={targetPath} />
                      <input name="commentId" type="hidden" value={comment.id} />
                      <button className="text-button danger" type="submit">
                        <Trash2 size={14} aria-hidden="true" />
                        Delete
                      </button>
                    </form>
                  ) : null}
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

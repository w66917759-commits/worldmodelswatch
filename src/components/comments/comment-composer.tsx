"use client";

import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

import {
  submitCommentAction,
  type CommentFormState,
} from "@/lib/comment-actions";

const initialState: CommentFormState = {
  status: "idle",
};

type CommentComposerProps = {
  targetPath: string;
};

export function CommentComposer({ targetPath }: CommentComposerProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitCommentAction,
    initialState,
  );

  useEffect(() => {
    if (state.status !== "success") return;
    formRef.current?.reset();
    router.refresh();
  }, [router, state.status]);

  return (
    <form action={formAction} className="comment-composer" ref={formRef}>
      <input name="targetPath" type="hidden" value={targetPath} />
      <label htmlFor="comment-body">Add a comment</label>
      <textarea
        defaultValue={state.status === "error" ? state.body : ""}
        disabled={isPending}
        id="comment-body"
        maxLength={2000}
        name="body"
        placeholder="Share a source note, correction, or reading question."
        rows={5}
      />
      <div className="comment-composer-footer">
        {state.message ? (
          <p
            className={
              state.status === "error" ? "form-error" : "comment-form-success"
            }
            role={state.status === "error" ? "alert" : "status"}
          >
            {state.message}
          </p>
        ) : (
          <p>Plain text only. 2,000 characters maximum.</p>
        )}
        <button className="button primary" disabled={isPending} type="submit">
          <Send size={16} aria-hidden="true" />
          {isPending ? "Publishing..." : "Publish"}
        </button>
      </div>
    </form>
  );
}

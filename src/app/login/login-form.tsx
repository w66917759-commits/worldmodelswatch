"use client";

import { useActionState } from "react";
import { LockKeyhole, Mail, ShieldAlert } from "lucide-react";

import { loginAction, type LoginState } from "./actions";

type LoginFormProps = {
  configured: boolean;
  missing: string[];
  nextPath: string;
};

const initialState: LoginState = {};

export function LoginForm({ configured, missing, nextPath }: LoginFormProps) {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <form action={formAction} className="auth-form">
      <input name="next" type="hidden" value={nextPath} />

      {!configured && (
        <div className="auth-notice" role="status">
          <ShieldAlert size={18} aria-hidden="true" />
          <span>
            Configure {missing.join(", ")} before production sign-in is enabled.
          </span>
        </div>
      )}

      <label className="form-field">
        <span>Email</span>
        <span className="input-wrap">
          <Mail size={17} aria-hidden="true" />
          <input
            autoComplete="email"
            defaultValue={state.email}
            disabled={!configured || isPending}
            name="email"
            placeholder="editor@worldmodelswatch.com"
            type="email"
          />
        </span>
      </label>

      <label className="form-field">
        <span>Password</span>
        <span className="input-wrap">
          <LockKeyhole size={17} aria-hidden="true" />
          <input
            autoComplete="current-password"
            disabled={!configured || isPending}
            name="password"
            placeholder="Production admin password"
            type="password"
          />
        </span>
      </label>

      {state.error && (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      )}

      <button
        className="button primary auth-submit"
        disabled={!configured || isPending}
        type="submit"
      >
        <LockKeyhole size={17} aria-hidden="true" />
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogIn, UserRound } from "lucide-react";

type AuthStatus = "unknown" | "authenticated" | "anonymous";

type AuthStatusLinkProps = {
  className?: string;
  onClick?: () => void;
  variant?: "default" | "light";
};

export function AuthStatusLink({
  className,
  onClick,
  variant = "default",
}: AuthStatusLinkProps) {
  const [status, setStatus] = useState<AuthStatus>("unknown");

  useEffect(() => {
    let active = true;

    fetch("/api/auth/session", {
      cache: "no-store",
      credentials: "same-origin",
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { authenticated?: boolean } | null) => {
        if (!active) return;
        setStatus(data?.authenticated ? "authenticated" : "anonymous");
      })
      .catch(() => {
        if (active) setStatus("anonymous");
      });

    return () => {
      active = false;
    };
  }, []);

  const authenticated = status === "authenticated";
  const Icon = authenticated ? UserRound : LogIn;

  return (
    <Link
      className={[
        "auth-status-link",
        variant === "light" ? "auth-status-link-light" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={authenticated ? "/account" : "/login"}
      onClick={onClick}
      prefetch={false}
    >
      <Icon size={15} aria-hidden="true" />
      <span>{authenticated ? "Account" : "Log in"}</span>
    </Link>
  );
}

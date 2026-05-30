import Link from "next/link";
import { ArrowRight, CalendarDays, GitBranch, WandSparkles } from "lucide-react";

const portalButtons = [
  {
    href: "/world-stream",
    label: "World Evolution",
    text: "See how world models move from explore and create to control, simulate, and build.",
    Icon: GitBranch,
  },
  {
    href: "/create-word",
    label: "Create AI Worlds",
    text: "Open the currently available consumer world creation tools.",
    Icon: WandSparkles,
  },
  {
    href: "/events",
    label: "Events Timeline",
    text: "Follow source-backed updates through the five-stage evolution path.",
    Icon: CalendarDays,
  },
] as const;

export function HomePortalButtons() {
  return (
    <section className="home-portal-buttons" aria-labelledby="home-portal-title">
      <div className="home-portal-heading">
        <p>Portal Index</p>
        <h2 id="home-portal-title">Choose the next layer.</h2>
      </div>

      <div className="home-portal-grid">
        {portalButtons.map(({ href, label, text, Icon }) => (
          <Link className="home-portal-button" href={href} key={href}>
            <Icon size={20} aria-hidden="true" />
            <span>
              <strong>{label}</strong>
              <small>{text}</small>
            </span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

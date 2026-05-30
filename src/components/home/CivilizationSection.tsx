import Link from "next/link";
import { ArrowRight } from "lucide-react";

const observations = [
  {
    time: "00:01",
    title: "Agents forming jobs",
    detail: "Roles emerge because the world needs work, routes, memory, and coordination.",
  },
  {
    time: "00:07",
    title: "Agents building markets",
    detail: "Exchange appears when agents value resources, time, and shared outcomes.",
  },
  {
    time: "00:12",
    title: "Rumors moving through town",
    detail: "Information becomes social material instead of static state.",
  },
  {
    time: "00:18",
    title: "A town electing leaders",
    detail: "Organization forms when agents need decisions that outlast one action.",
  },
  {
    time: "00:25",
    title: "Agents creating rituals",
    detail: "Repeated behavior becomes culture when a population remembers it.",
  },
  {
    time: "00:31",
    title: "AI civilization emerging",
    detail: "The world turns into an observation site for society-scale behavior.",
  },
] as const;

export function CivilizationSection() {
  return (
    <section
      className="civilization-observatory-section"
      id="civilization"
      aria-labelledby="civilization-title"
    >
      <div className="civilization-observatory">
        <div className="portal-section-heading compact">
          <span>Civilization</span>
          <h2 id="civilization-title">AI society observation station.</h2>
          <p>
            The deepest event is not another better-looking world. It is the
            moment agents start creating work, rules, rumors, markets, and rituals.
          </p>
        </div>

        <div className="civilization-console">
          <div className="civilization-map" aria-hidden="true">
            <span className="map-node map-node-a" />
            <span className="map-node map-node-b" />
            <span className="map-node map-node-c" />
            <span className="map-node map-node-d" />
            <span className="map-line map-line-a" />
            <span className="map-line map-line-b" />
            <span className="map-line map-line-c" />
          </div>

          <div className="civilization-log" aria-label="AI civilization observations">
            {observations.map((observation) => (
              <article className="civilization-event-card" key={observation.title}>
                <span>{observation.time}</span>
                <h3>{observation.title}</h3>
                <p>{observation.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <Link className="civilization-link" href="/events#agent-societies">
          Watch civilization events
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

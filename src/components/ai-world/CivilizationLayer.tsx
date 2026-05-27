import { civilizationSignals } from "./worldsData";

export function CivilizationLayer() {
  return (
    <section className="portal-section civilization-layer" id="civilization">
      <div className="civilization-station">
        <div className="portal-section-heading compact">
          <span>Civilization Layer</span>
          <h2>AI society observation.</h2>
          <p>
            Generated worlds become more important when they contain persistent
            people, rituals, markets, memory, conflict, and culture.
          </p>
        </div>

        <div className="civilization-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="civilization-grid">
          {civilizationSignals.map((signal, index) => (
            <article className="civilization-card" key={signal.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{signal.source}</p>
              <h3>{signal.title}</h3>
              <small>{signal.text}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

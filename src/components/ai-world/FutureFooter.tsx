import { worldsData } from "./worldsData";

export function FutureFooter() {
  return (
    <footer className="future-footer" id="future-index">
      <div>
        <span>Future Reality Index</span>
        <h2>Generated Reality Archive</h2>
      </div>

      <div className="future-index-grid">
        <p>
          <strong>{worldsData.length}</strong>
          Worlds Indexed
        </p>
        <p>
          <strong>∞</strong>
          Simulations Incoming
        </p>
        <p>
          <strong>24/7</strong>
          Reality Signals
        </p>
      </div>
    </footer>
  );
}

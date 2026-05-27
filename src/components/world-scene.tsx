const nodes = [
  { label: "Text", x: "12%", y: "22%" },
  { label: "3D", x: "76%", y: "18%" },
  { label: "Action", x: "58%", y: "48%" },
  { label: "State", x: "22%", y: "62%" },
  { label: "Policy", x: "84%", y: "72%" },
];

export function WorldScene() {
  return (
    <div className="world-scene" aria-hidden="true">
      <div className="scene-grid" />
      <div className="scene-ribbon ribbon-one" />
      <div className="scene-ribbon ribbon-two" />
      {nodes.map((node, index) => (
        <span
          className="scene-node"
          style={{ left: node.x, top: node.y, animationDelay: `${index * 160}ms` }}
          key={node.label}
        >
          {node.label}
        </span>
      ))}
    </div>
  );
}

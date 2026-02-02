import { useState } from "react";

export default function Testing() {
  const [activeName, setActiveName] = useState(null);

  return (
    <div className="m-16 p-8 border">
      <div className="flex gap-4 m-2">
        <button className="p-2 border" onClick={() => setActiveName("james")}>
          greet james
        </button>
        <button className="p-2 border" onClick={() => setActiveName("holland")}>
          greet holland
        </button>
      </div>

      {activeName && (
        <Card name={activeName} onClose={() => setActiveName(null)} />
      )}
    </div>
  );
}

function Card({ name, onClose }) {
  const bgMap = {
    james: "bg-green-300",
    holland: "bg-red-300",
  };
  const bg = bgMap[name] ?? "bg-green-300";

  return (
    <div className={`${bg} grid gap-2`}>
      <button className="p-2 border" onClick={onClose}>
        close
      </button>
      <p className="p-4">
        greetings from <span className="text-2xl font-semibold">{name}</span>
      </p>
    </div>
  );
}

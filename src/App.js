import { lazy, useState, Suspense } from "react";

const Globe = lazy(() => import("./globe"));
const loadGlobeComponent = () => import("./globe");

function App() {
  const [showGlobe, setShowGlobe] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        padding: "2rem",
      }}
    >
      <label
        style={{ marginBottom: "1rem" }}
        onFocus={loadGlobeComponent}
        onMouseEnter={loadGlobeComponent}
      >
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={(e) => setShowGlobe(e.target.checked)}
        />
        {" show globe"}
      </label>
      <div style={{ width: 400, height: 400 }}>
        <Suspense fallback={<div>Loading...</div>}>
          {showGlobe ? <Globe /> : null}
        </Suspense>
      </div>
    </div>
  );
}

export default App;

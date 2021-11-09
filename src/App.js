import { ARCanvas } from "@react-three/xr";
import { Suspense } from "react";

// Models
import Box from './models/Box';
import ScaryGuy from './models/ScaryGuy';

function App() {
  return (
    <ARCanvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} />

        <Box position={[0, 0, 1.2]} scale={0.3} />
        <ScaryGuy position={[-1.2, 0, 0]} scale={0.2} />
      </Suspense>
    </ARCanvas>
  );
}

export default App;

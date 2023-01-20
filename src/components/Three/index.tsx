import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Environment, Stage } from "@react-three/drei";
import World from "./World";
import Ground from "./Ground";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Three() {
  return (
    <Canvas shadows style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.1} />
      <spotLight
        position={[100, 100, -100]}
        angle={1}
        intensity={0.5}
        castShadow
        penumbra={1}
      />
      <Physics>
        <Stage
          intensity={0.2}
          environment="sunset"
          shadows={{ type: "accumulative", bias: -0.001 } as any}
          adjustCamera={false}
        >
          <World />
          <Ground />
        </Stage>
        <Environment background preset="sunset" blur={1} />
      </Physics>
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}

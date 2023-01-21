import { Canvas } from "@react-three/fiber";
import { Physics, useBox, useCylinder } from "@react-three/cannon";
import { Environment, Stage } from "@react-three/drei";
import World from "./World";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Ground from "../object/Ground";
import Hangul from "../object/Hangul";
import Picture from "../object/Picture";
import Tiger from "../object/Tiger";
import Sang from "../object/Sang";
import Bungpung from "../object/Bungpung";
import WallFrontLeft from "../object/WallFrontLeft";
import WallFrontRight from "../object/WallFrontRight";
import WallBackLeft from "../object/WallBackLeft";
import WallBackRight from "../object/WallBackRight";

export default function Three() {
  return (
    <Canvas shadows style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.1} />
      <fog attach="fog" args={["white", 0, 500]} />
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
          <Bungpung />
          <WallFrontLeft />
          <WallFrontRight />
          <WallBackLeft />
          <WallBackRight />

          <Picture />
          <Sang />
          <Tiger />
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

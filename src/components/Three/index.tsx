import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Environment, Stage } from "@react-three/drei";
import World from "./World";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Ground from "../object/Ground";
import Picture from "../object/Picture";
import Tiger from "../object/Tiger";
import NameDesc from "../object/NameDesc";
import Wall, { WallPosition } from "../object/Wall";
import NameSNS from "../object/NameSNS";
import NameKorea from "../object/NameKorea";
import NameHelper from "../object/NameHelper";
import Hangul from "../object/Hangul";
import Seoul from "../object/Seoul";
import Facebook from "../object/Facebook";
import Instargram from "../object/Instargram";
import Whatsapp from "../object/Whatsapp";

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
        <Stage intensity={0.2} environment="sunset" adjustCamera={false}>
          {WallPosition.map(({ position, scale, rotation }, key) => {
            return (
              <Wall
                key={key}
                position={position}
                scale={scale}
                rotation={rotation}
              />
            );
          })}
          <NameDesc />
          <NameSNS />
          <NameKorea />
          <NameHelper />

          <Facebook />
          <Instargram />
          <Whatsapp />

          <Picture />
          <Hangul />
          <Seoul />
          {/* <Bungpung />
          <Sang /> */}
          <Tiger />
          <World />
          <Ground />
        </Stage>
        <Environment background preset="sunset" blur={1} />
      </Physics>
    </Canvas>
  );
}

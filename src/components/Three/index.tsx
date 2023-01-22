import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Environment, Stage } from "@react-three/drei";
import World from "./World";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Ground from "../object/base/Ground";
import NameDesc from "../object/nametag/NameDesc";

import Hangul from "../object/front/Hangul";
import Facebook from "../object/back/Facebook";

import { Suspense } from "react";
import ProgressBar from "../common/progress";
import Wall, { WallPosition } from "../object/base/Wall";
import NameSNS from "../object/nametag/NameSNS";
import NameKorea from "../object/nametag/NameKorea";
import NameHelper from "../object/nametag/NameHelper";
import Instargram from "../object/back/Instargram";
import Whatsapp from "../object/back/Whatsapp";
import Ssirum from "../object/front/Ssirum";
import Seoul from "../object/front/Seoul";
import Tiger from "../object/front/Tiger";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";

export default function Three() {
  return (
    <Suspense fallback={<ProgressBar />}>
      <Canvas shadows style={{ width: "100vw", height: "100vh" }}>
        <fog attach="fog" args={["white", 0, 500]} />
        <Selection>
          <EffectComposer multisampling={0} autoClear={false}>
            <Outline
              visibleEdgeColor={"white" as unknown as number}
              edgeStrength={1000}
            />
          </EffectComposer>
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

              <Ssirum />
              <Hangul />
              <Seoul />

              <Tiger />
              <World />
              <Ground />
            </Stage>
            <Environment background preset="sunset" blur={1} />
          </Physics>
        </Selection>
      </Canvas>
    </Suspense>
  );
}

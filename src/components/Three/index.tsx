import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Environment, Stage } from "@react-three/drei";
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
import MyCharacter from "./MyCharacter";
import Screen from "../object/right/Screen";
import Roof from "../object/base/Roof";
import Ocean from "../object/base/Ocean";
import Crystal, { CrystalPosition } from "../object/base/Crystal";
import Sun from "../object/base/Sun";

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
            <Stage
              intensity={0.2}
              environment="sunset"
              adjustCamera={false}
              receiveShadow
              castShadow
            >
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
              {CrystalPosition.map(({ position, scale, rotation }, key) => {
                return (
                  <Crystal
                    key={key}
                    position={position}
                    scale={scale}
                    rotation={rotation}
                  />
                );
              })}
              <Ocean />
              <Sun />

              {/* <NameDesc />
              <NameSNS />
              <NameKorea />
              <NameHelper /> */}

              <Facebook />
              <Instargram />
              <Whatsapp />

              <Ssirum />
              <Hangul />
              <Seoul />

              <Screen />

              <Tiger />
              <MyCharacter />
              <Ground />
              <Roof />
            </Stage>
            <Environment preset="sunset" blur={1} background={true} />
          </Physics>
        </Selection>
      </Canvas>
    </Suspense>
  );
}

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Environment, Stage } from "@react-three/drei";
import { Selection } from "@react-three/postprocessing";
import { Suspense, useRef } from "react";

import Facebook from "components/object/back/Facebook";
import Instargram from "components/object/back/Instargram";
import Whatsapp from "components/object/back/Whatsapp";
import Mountain, { MountainPosition } from "components/object/base/Mountain";
import Ground from "components/object/base/Ground";
import Roof from "components/object/base/Roof";
import Sun from "components/object/base/Sun";
import Wall, { WallPosition } from "components/object/base/Wall";
import Hangul from "components/object/front/Hangul";
import MyCharacter from "./MyCharacter";
import Ocean from "components/object/base/Ocean";
import ScreenPicture from "components/object/right/ScreenPicture";
import Progress3D from "components/common/progress";
import Seoul from "components/object/front/Seoul";
import Tree, { TreePosition } from "components/object/base/Tree";
import Hanok from "components/object/base/Hanok";
import Amg from "components/object/front/Amg";
import Mensa from "components/object/front/Mensa";

export default function Three() {
  const _ref = useRef<any>();
  return (
    <Suspense fallback={<Progress3D />}>
      <Canvas shadows style={{ width: "100vw", height: "100vh" }}>
        <fog attach="fog" args={["white", 0, 500]} />

        <Selection>
          <Physics>
            <Stage
              intensity={0.2}
              environment="sunset"
              adjustCamera={false}
              receiveShadow
              castShadow
            >
              <group ref={_ref as any}>
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
              </group>

              {MountainPosition.map(({ position, scale, rotation }, key) => {
                return (
                  <Mountain
                    key={key}
                    position={position}
                    scale={scale}
                    rotation={rotation}
                  />
                );
              })}
              {TreePosition.map(({ position, scale, rotation }, key) => {
                return (
                  <Tree
                    key={key}
                    position={position}
                    scale={scale}
                    rotation={rotation}
                  />
                );
              })}
              <Ocean />
              <Sun />
              <Facebook />
              <Instargram />
              {/* <Whatsapp /> */}

              <Seoul />
              <Hangul />
              <ScreenPicture />
              <MyCharacter />
              <Ground />
              <Roof />
              <Hanok />
              <Amg />
              <Mensa />
            </Stage>
            <Environment preset="sunset" blur={1} background={true} />
          </Physics>
        </Selection>
      </Canvas>
    </Suspense>
  );
}

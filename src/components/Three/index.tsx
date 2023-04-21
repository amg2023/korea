import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Environment, Stage } from "@react-three/drei";
import { Selection } from "@react-three/postprocessing";
import { Suspense, useRef, useState } from "react";

import Facebook from "components/object/back/Facebook";
import Instargram from "components/object/back/Instargram";
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
import { Group } from "three";
import Lamp from "components/object/base/Lamp";
import useRaycastActions from "store/raycast/query";
import Answer from "components/object/left/Answer";
import Gorani from "components/object/front/Gorani";

export default function Three() {
  // ref세트
  const groundRef = useRef<Group>();
  const { raycast } = useRaycastActions();
  const lampRefs = [];
  const stepARefs = [];
  const stepBRefs = [];
  for (let i = 0; i < raycast.stepA.length; i++) {
    const _ref = useRef<Group>();
    lampRefs.push(_ref);
    stepARefs.push({
      ...raycast.stepA[i],
      ref: _ref,
    });
  }
  for (let i = 0; i < raycast.stepB.length; i++) {
    const _ref = useRef<Group>();
    lampRefs.push(_ref);
    stepBRefs.push({
      ...raycast.stepB[i],
      ref: _ref,
    });
  }
  const refs = [groundRef, ...lampRefs];

  const [env, setEnv] = useState<
    | "sunset"
    | "dawn"
    | "night"
    | "warehouse"
    | "forest"
    | "apartment"
    | "studio"
    | "city"
    | "park"
    | "lobby"
    | null
    | undefined
  >("sunset");

  return (
    <Suspense fallback={<Progress3D />}>
      <Canvas shadows style={{ width: "100vw", height: "100vh" }}>
        <fog attach="fog" args={["white", 0, 500]} />

        <Selection>
          <Physics>
            <Stage
              intensity={0.2}
              environment={env}
              adjustCamera={false}
              receiveShadow
              castShadow
            >
              <group>
                {WallPosition.map(
                  ({ position, scale, rotation, name }, key) => {
                    return (
                      <Wall
                        name={name}
                        key={key}
                        position={position}
                        scale={scale}
                        rotation={rotation}
                      />
                    );
                  }
                )}
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
              <Seoul />
              <Hangul />
              <ScreenPicture />
              <MyCharacter refs={refs} />
              <Ground _ref={groundRef} />
              <Roof />
              <Hanok />
              <Amg />
              <Mensa />
              <Answer />
              {raycast.step === 1 && (
                <>
                  {stepARefs.map(
                    ({ ref, name, hint, position }: any, key: number) => {
                      return (
                        <Lamp
                          _ref={ref}
                          key={key}
                          name={name}
                          hint={hint}
                          position={position}
                        />
                      );
                    }
                  )}
                </>
              )}
              {raycast.step === 2 && (
                <>
                  {stepBRefs.map(
                    ({ ref, name, hint, position }: any, key: number) => {
                      return (
                        <Lamp
                          _ref={ref}
                          key={key}
                          name={name}
                          hint={hint}
                          position={position}
                        />
                      );
                    }
                  )}
                </>
              )}
              {raycast.step === 4 && <Gorani />}
            </Stage>
            <Environment preset="sunset" blur={1} background={true} />
          </Physics>
        </Selection>
      </Canvas>
    </Suspense>
  );
}

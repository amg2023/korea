import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { modalAtom } from "../../../store/modal/atom";
import { CancelButton } from "../../common/cancel/CancelButton";
import { S3_URL } from "../../common/control/constant";
import GltfObject from "../../object/GltfObject";
import { IGltfReturn } from "../../Three/types";
import * as S from "./style";

export default function PicturePage() {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "picture.gltf");

  return (
    <>
      <Canvas
        shadows
        style={{
          width: "40vw",
          height: "40vh",
        }}
      >
        <spotLight
          position={[100, 100, 100]}
          angle={1}
          intensity={0.5}
          castShadow
          penumbra={1}
        />
        <group rotation={[0, Math.PI, 0]}>
          <GltfObject
            nodes={nodes}
            materials={materials}
            scale={[0.008, 0.008, 0.008]}
          />
        </group>
        <OrbitControls />
      </Canvas>
      <div>
        <h1>헬로우</h1>
      </div>
    </>
  );
}

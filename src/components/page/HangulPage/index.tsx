import { Canvas, useLoader } from "@react-three/fiber";
import GltfObject from "components/object/base/GltfObject";
import { IGltfReturn } from "components/Three/types";
import { S3_URL } from "data/constant";
import { hangulEs } from "data/hangul";
import { Suspense } from "react";
import Markdown from "../Markdown/Markdown";
import { OrbitControls } from "@react-three/drei";
import * as S from "./style";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const url = S3_URL + "hangul.gltf";

export default function HangulPage() {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <S.hangulPage>
      <h1>HANGUL</h1>
      <Suspense>
        <Canvas
          shadows
          style={{
            width: "50vw",
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
              scale={[0.012, 0.005, 0.006]}
            />
          </group>
          <OrbitControls maxDistance={4} minDistance={2} />
        </Canvas>
      </Suspense>
      <Markdown content={hangulEs} />
    </S.hangulPage>
  );
}
useLoader.preload(GLTFLoader, url);

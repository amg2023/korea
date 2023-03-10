import { Canvas, useLoader } from "@react-three/fiber";
import GltfObject from "components/object/base/GltfObject";
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
    <S.hangulPage className="hangul-page">
      <h1>HANGUL</h1>
      <Suspense>
        <Canvas
          shadows
          style={{
            width: "100vw",
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
              scale={[0.01, 0.005, 0.008]}
            />
          </group>
          <OrbitControls maxDistance={6} minDistance={2} />
        </Canvas>
      </Suspense>

      <h2>That is unparalleled grammatological luxuary.</h2>
      <h2>Gari Keith Ledyard (1932 - 2021)</h2>
      <Markdown content={hangulEs} />
    </S.hangulPage>
  );
}
useLoader.preload(GLTFLoader, url);

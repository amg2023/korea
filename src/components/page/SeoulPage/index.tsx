import { OrbitControls } from "@react-three/drei";
import { useLoader, Canvas } from "@react-three/fiber";
import GltfObject from "components/object/base/GltfObject";
import { S3_URL } from "data/constant";
import { seoulEs } from "data/seoul";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Markdown from "../Markdown/Markdown";
import * as S from "./style";

const url = S3_URL + "seoul.gltf";

export default function SeoulPage() {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <S.seoulPage>
      <h1>SEOUL</h1>
      <Suspense>
        <Canvas
          shadows
          style={{
            width: "100vw",
            height: "70vh",
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
              scale={[0.02, 0.01, 0.008]}
            />
          </group>
          <OrbitControls maxDistance={6} minDistance={2} />
        </Canvas>
      </Suspense>
      <Markdown content={seoulEs} />
    </S.seoulPage>
  );
}
useLoader.preload(GLTFLoader, url);

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import Markdown from "../../common/Markdown/Markdown";
import GltfObject from "../../object/base/GltfObject";

const url = S3_URL + "tiger.gltf";

export default function TigerPage() {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <Suspense>
      <Canvas
        shadows
        style={{
          width: "50vw",
          height: "50vh",
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
            scale={[0.004, 0.003, 0.004]}
          />
        </group>
        <OrbitControls maxDistance={6} minDistance={2} />
      </Canvas>
      <Markdown content={"### 타이거 페이지"} />
    </Suspense>
  );
}
useLoader.preload(GLTFLoader, url);

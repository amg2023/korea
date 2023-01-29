import { OrbitControls } from "@react-three/drei";
import { useLoader, Canvas } from "@react-three/fiber";
import GltfObject from "components/object/base/GltfObject";
import { S3_URL } from "data/constant";
import { seoulEs } from "data/seoul";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Markdown from "../Markdown/Markdown";

const url = S3_URL + "screen.gltf";

export default function HotelPage() {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <Suspense>
      <Canvas
        shadows
        style={{
          width: "50vw",
          height: "60vh",
        }}
      >
        <spotLight
          position={[100, 100, 100]}
          angle={1}
          intensity={0.5}
          castShadow
          penumbra={1}
        />
        <group rotation={[Math.PI / 2, 0, 0]}>
          <GltfObject
            nodes={nodes}
            materials={materials}
            scale={[1.5, 1.5, 1.5]}
          />
        </group>
        <OrbitControls maxDistance={6} minDistance={2} />
      </Canvas>
      <Markdown content={seoulEs} />
    </Suspense>
  );
}
useLoader.preload(GLTFLoader, url);

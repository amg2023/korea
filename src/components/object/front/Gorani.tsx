import { useLoader } from "@react-three/fiber";
import { S3_URL } from "data/constant";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { NameTag } from "components/Three/NameTag";

const url = S3_URL + "goranii.gltf";
export default function Gorani() {
  const { scene } = useLoader(GLTFLoader, url);

  return (
    <mesh
      rotation={[0, Math.PI / 2, 0]}
      scale={[8, 8, 8]}
      position={[0, 0, 100]}
    >
      <NameTag name={"GORANI"} top={"-10rem"} />
      <primitive object={scene} />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);

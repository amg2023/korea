import { usePlane } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../../utils/constant";
import GltfObject from "./GltfObject";

export default function Ground() {
  const { nodes, materials } = useGLTF(S3_URL + "floor.gltf");
  // const { nodes, materials } = useGLTF("/floor.gltf");
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.3, 0],
    args: [100, 100, 10],
    type: "Static",
  }));
  return (
    <mesh ref={ref as any}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[2, 2, 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </mesh>
  );
}

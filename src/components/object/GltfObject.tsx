import { Material } from "three";
import { Object3DExtends } from "../Three/types";

type IGltfObject = {
  nodes: {
    [name: string]: Object3DExtends;
  };
  materials: {
    [name: string]: Material | Material[] | undefined;
  };
  scene?: any;
  scale?: [number, number, number];
  rotation?: [number, number, number];
  position?: [number, number, number];
  x?: number;
  z?: number;
};
export default function GltfObject({
  nodes,
  materials,
  scale,
  rotation,
  position,
}: IGltfObject) {
  return (
    <group scale={scale}>
      {Object.keys(nodes).map((name: string, key: number) => {
        const names = name.split("_");
        if (names[0] === "mesh") {
          const material_name = "material_" + names[1];
          const node_name = "mesh_" + names[1];
          return (
            <mesh
              key={key}
              castShadow
              receiveShadow
              material={materials[material_name]}
              geometry={nodes[node_name].geometry}
              rotation={rotation}
              position={position}
            />
          );
        }
      })}
    </group>
  );
}

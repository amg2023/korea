import { Material } from "three";
import { Object3DExtends } from "./types";

type IGltfObject = {
  nodes: {
    [name: string]: Object3DExtends;
  };
  materials: {
    [name: string]: Material | Material[] | undefined;
  };
  scene?: any;
  x?: number;
  z?: number;
};
export default function GltfObject({ nodes, materials }: IGltfObject) {
  return (
    <group scale={[2, 0.1, 2]}>
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
            />
          );
        }
      })}
    </group>
  );
}

import { IGltfObject } from "./type";

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

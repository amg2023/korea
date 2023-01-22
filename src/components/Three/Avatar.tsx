import { NameTag } from "./NameTag";
import { IAvatar } from "./types";

export default function Avatar({ nodes, materials, x, z, innerRef }: IAvatar) {
  return (
    <group ref={innerRef}>
      <group
        scale={[1, 1, 1]}
        dispose={null}
        rotation={[0, 0, 0]}
        position={[x, 0, z]}
      >
        <NameTag name={"ME"} />
        <primitive object={nodes.walk} visible={false} />
        {Object.keys(nodes).map((name: string, key: number) => {
          const names = name.split("_");
          if (names[0] === "mesh") {
            const material_name = "material_" + names[1];
            const node_name = "mesh_" + names[1];
            return (
              <skinnedMesh
                castShadow
                receiveShadow
                material={materials[material_name]}
                geometry={nodes[node_name].geometry}
                skeleton={nodes[node_name].skeleton}
                key={key}
              ></skinnedMesh>
            );
          }
        })}
      </group>
    </group>
  );
}

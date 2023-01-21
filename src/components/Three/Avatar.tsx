import { Ref } from "react";
import { Group, Material } from "three";
import { NameTag } from "./NameTag";
import { Object3DExtends } from "./types";

type IAvatar = {
  nodes: {
    [name: string]: Object3DExtends;
  };
  materials: {
    [name: string]: Material | Material[] | undefined;
  };
  x: number;
  z: number;
  innerRef: Ref<Group>;
};
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

import { useCompoundBody, useCylinder } from "@react-three/cannon";
import { PerspectiveCamera } from "@react-three/drei";
import MyCharacter from "./MyCharacter";

export default function World() {
  const body = useCompoundBody(() => ({
    mass: 0,
    type: "Dynamic",
    shapes: [
      { args: [1.5], position: [0, 4, 0], type: "Sphere" },
      { args: [1.5, 1.5, 2.5], position: [0, 2.2, 0], type: "Cylinder" },
      { args: [1.5], position: [0, 1.5, 0], type: "Sphere" },
    ],
  }));

  return (
    <group>
      <group ref={body[0] as any}>
        <PerspectiveCamera
          makeDefault
          position={[0, 16, -25]}
          rotation={[0.25, 3.15, 0]}
        />

        <MyCharacter body={body} />
      </group>
    </group>
  );
}

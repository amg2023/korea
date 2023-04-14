import Lamp from "../base/Lamp";

export default function StepA({ stepARefs }: any) {
  console.log(stepARefs);
  return (
    <>
      {stepARefs.map(({ ref, name, hint, position }: any, key: number) => {
        return (
          <Lamp
            _ref={ref}
            key={key}
            name={name}
            hint={hint}
            position={position}
          />
        );
      })}
    </>
  );
}

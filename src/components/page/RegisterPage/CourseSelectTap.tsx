import * as S from "./style";
import { IOption, ITap } from "./type";
import { Ref, useEffect, useRef, useState } from "react";
import PulseButton from "components/common/button/PulseButton";
import { MainEvents, Options } from "../../../data/package";
import usePayActions from "store/pay/query";

export const THead = () => {
  return (
    <thead>
      <tr>
        <th>package</th>
        <th>title</th>
        <th>content</th>
        <th>price</th>
        <th>select</th>
      </tr>
    </thead>
  );
};

export default function CourseSelectTap({ setStep }: ITap) {
  const { pay, setPay, onCalcTotal } = usePayActions();
  const [complete, setComplete] = useState(true);
  const [option, setOption] = useState(true);
  const ref = useRef<HTMLTableSectionElement>();
  const onClickNext = () => {
    setStep!(2);
  };

  useEffect(() => {
    if (pay.total !== 0) {
      setComplete(false);
    }
  }, [pay]);

  const onChangeMainEvent = (e: any) => {
    setPay({
      ...pay,
      course: [
        ...pay.course.map((item: IOption) => {
          if (item.id === parseInt(e.target.id)) {
            item.checked = true;
            setOption(item.package);
            return item;
          } else {
            item.checked = false;
            return item;
          }
        }),
      ],
    });
    onCalcTotal();
  };

  const onChangeOptions = (e: any) => {
    setPay({
      ...pay,
      option: [
        ...pay.option.map((item: IOption) => {
          if (item.id === parseInt(e.target.id)) {
            item.checked = !item.checked;
          }
          return item;
        }),
      ],
    });
    onCalcTotal();
  };

  return (
    <S.CourseSelectContent>
      <h1>CHOOSE COURSE (is TEST)</h1>
      <S.TableOuter>
        <h2>Main Events</h2>
        <table>
          <THead />
          <tbody>
            {MainEvents.map((item: IOption, key: number) => {
              return (
                <tr key={key} className="table-row">
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>{item.schedule}</td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      type="radio"
                      id={key + 1 + ""}
                      name="course"
                      checked={item.checked}
                      onChange={onChangeMainEvent}
                    />
                    <label htmlFor={key + 1 + ""}>
                      <div className="outer">
                        <div className="inner"></div>
                      </div>
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!option && (
          <>
            <h2>Options</h2>
            <table>
              <THead />
              <tbody ref={ref as Ref<HTMLTableSectionElement>}>
                {Options.map((item: IOption, key: number) => {
                  return (
                    <tr key={key} className="table-row">
                      <td>{item.title}</td>
                      <td>{item.content}</td>
                      <td>{item.schedule}</td>
                      <td>{item.price}</td>
                      <td className="table-radio">
                        <input
                          type="radio"
                          id={item.id + ""}
                          name={"option" + (key + 1)}
                          checked={item.checked}
                          onClick={onChangeOptions}
                          readOnly
                        />
                        <label htmlFor={MainEvents.length + key + 1 + ""}>
                          <div className="outer">
                            <div className="inner"></div>
                          </div>
                        </label>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </S.TableOuter>
      {/* <h2>total price: {pay.total} </h2>
      <div className="under">
        <PulseButton
          title={"NEXT"}
          style={{
            width: "6rem",
            height: "2.4rem",
            fontSize: "1rem",
            background: !complete
              ? "linear-gradient(45deg,#ee0979,#ff6a00)"
              : "gray",
            boxShadow: !complete ? "0 0 10px #ee0979" : "",
          }}
          onClick={onClickNext}
          complete={complete}
        />
      </div> */}
    </S.CourseSelectContent>
  );
}

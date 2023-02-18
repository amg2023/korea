import * as S from "./style";
import { GradientText } from "../text/Text";
import { IOption } from "type/course";

export default function CourseItem({
  option,
  onClick,
  id,
  checked,
}: {
  option: IOption;
  onClick: any;
  id: string;
  checked: boolean;
}) {
  return (
    <div onClick={onClick} id={id}>
      <S.CourseItem checked={checked} id={id}>
        <img src={option.imageUrl} id={id}></img>
        <div className="title" id={id}>
          <GradientText className="postitem-title" id={id}>
            {option.title}
          </GradientText>
          <p className="postitem-summary" id={id}>
            {option.content}
          </p>
          <p className="postitem-summary" id={id}>
            price: {option.price} USD
          </p>
        </div>
        <div className="under-left" id={id}>
          <p className="under-text" id={id}>
            start: {option.start}
          </p>
        </div>
        <div className="under-right" id={id}>
          <p className="under-text" id={id}>
            end : {option.end}
          </p>
        </div>
      </S.CourseItem>
    </div>
  );
}

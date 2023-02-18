import * as S from "./style";

export default function Spinner() {
  return (
    <S.Spinner>
      <div className="title-container">
        <div className="spinner">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" />
          </svg>
          <p className="text">Please Wait</p>
        </div>
      </div>
    </S.Spinner>
  );
}

import { ITimeTable } from "data/timetable";

export default function Table({ day, i }: { day: ITimeTable; i: number }) {
  return (
    <div className="table" key={i}>
      <div className={`table-row`}>
        <p className="content">{day.title}</p>
      </div>
      <div className={`table-row admin`}>
        <div>
          <p>time</p>
        </div>
        <div>
          <p>trackA</p>
        </div>
        <div>
          <p>trackB</p>
        </div>
      </div>
      <table>
        <tbody>
          {day.timeTable.map((time, i) => {
            return (
              <tr key={i}>
                <td className="table-item title">
                  <p>{time.time}</p>
                </td>
                <td
                  rowSpan={time.value[0].row}
                  colSpan={time.value[0].column}
                  className={time.value[0].openId ? "open" : ""}
                >
                  <p>
                    {time.value[0].title}{" "}
                    {time.value[0].price !== -1 && `(${time.value[0].price}$)`}
                  </p>
                  <div className="tag">
                    {time.value[0].link?.map((link, i) => (
                      <a href={link.url} key={i}>
                        {link.name} (link)
                      </a>
                    ))}
                  </div>
                </td>

                {time.value[1].title && (
                  <td
                    rowSpan={time.value[1].row}
                    colSpan={time.value[1].column}
                    className={time.value[1].openId ? "open" : ""}
                  >
                    <p>
                      {time.value[1].title}{" "}
                      {time.value[1].price !== -1 &&
                        `(${time.value[1].price}$)`}
                    </p>
                    <div className="tag">
                      {time.value[1].link?.map((link, i) => (
                        <a href={link.url} key={i}>
                          {link.name} (link)
                        </a>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

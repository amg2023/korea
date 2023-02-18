import React from "react";
import { Link } from "react-router-dom";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import { IPost } from "type/post";
import { BsPen } from "react-icons/bs";
import * as S from "./style";
import { GradientIcon } from "../icon/GradientIcon";

function Search({ onSubmit }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(e.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="filter" placeholder={"SEARCH"} />
    </form>
  );
}
export default function AdminTable({ columns, data }: any) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <S.STable>
      <div className="table-inner">
        <Search onSubmit={setGlobalFilter} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.STable>
  );
}

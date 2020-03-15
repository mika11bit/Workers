import React, { useState } from "react";
import TableItem from "./TableItem";

function Table(props) {
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Job</th>
      </tr>
      {props.data.map((dat, index) => {
        return <TableItem dat={dat} index={index} />;
      })}
    </table>
  );
}
export default Table;

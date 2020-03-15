import React from "react";
import DeleteWorker from '../Actions/DeleteWorker'

function TableItem({ dat, index }) {
  console.log("data: ", dat.name, " index: ", dat.id);
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{dat.name}</th>
      <th>{dat.job}</th>
      <th>
        <DeleteWorker />
      </th>
    </tr>
  );
}

export default TableItem;

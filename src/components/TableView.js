import React from "react";
import styled from "styled-components";
import Record from "./Record";

const Table = styled.table`
  border-collapse: collapse;
`;

const TableView = ({ data, timeFormat }) => (
  <Table>
    <thead>
      {/*<Record item={{name:"Name", type:"Type",value:"Value", id:"Datum"}}/>*/}
    </thead>
    <tbody>
      {data.map(row => (
        <Record timeFormat={timeFormat} key={row.id} item={row} />
      ))}
    </tbody>
  </Table>
);

export default TableView;

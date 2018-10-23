import React from "react";
import Type from "./Type";
import styled from "styled-components";

const Td = styled.td`
  // border: 1px solid black;
  font-size: 2em;
  padding: 10px 5px 10px 5px;
  width: 40%;
  text-align: left;
`;

const ShorterTd = styled(Td)`
  width: 20%;
  text-align: center;
`;

const Record = ({ item: { id, name, type, value }, timeFormat }) => {
  return (
    <tr>
      <Td>
        <Type typeName={name} />
      </Td>
      <ShorterTd>
        <Type typeName={type} />
      </ShorterTd>
      <ShorterTd>
        <Type typeName={value} />
      </ShorterTd>
      <ShorterTd>
        <Type typeName={timeFormat ? timeFormat(id) : id} />
      </ShorterTd>
    </tr>
  );
};

export default Record;

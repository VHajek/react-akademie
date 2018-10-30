import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TableView from "../components/TableView";
import Filter from "../components/Filter";
import Header from "../components/shared/Header";
import Container from "../components/shared/Container";
import Footer from "../components/shared/Footer";
import { buttonsTransFilter } from "../constants/";
import WrapperTransaction from "../components/wrapperTransaction";

const Button = styled.button`
  color: red;
`;

const Transaction = ({
  transaction,
  newTransaction: { name, value, type },
  addTransaction,
  filter,
  handleImputChange,
  timeFormat
}) => {
  return (
    <div>
      <Header>
        <h1>Šrajtofle</h1>
        <Filter funkce={filter} buttons={buttonsTransFilter} />
      </Header>

      <Container>
        <TableView timeFormat={timeFormat} data={transaction} />
      </Container>

      <Footer>
        <Button onClick={addTransaction}>Přidat</Button>
        <form>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleImputChange}
          />
          <input
            type="number"
            id="value"
            value={value}
            onChange={handleImputChange}
          />
          <select value={type} id="type" onChange={handleImputChange}>
            <option value="income">Income</option>
            <option value="extends">Extends</option>
          </select>
        </form>
        <Link to="/overview">Přehled</Link>
      </Footer>
    </div>
  );
};

export default WrapperTransaction(Transaction);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import styled from "styled-components";
import TableView from "../components/TableView";
import Filter from "../components/Filter";
import Header from "../components/shared/Header";
import Container from "../components/shared/Container";
import Footer from "../components/shared/Footer";

const Button = styled.button`
  color: red;
`;

class Transaction extends Component {
  state = {
    transaction: [],
    newTransaction: {
      name: "",
      value: 0,
      type: "income",
      id: 0
    },
    buttons: [
      {
        title: "Příjem",
        id: "income"
        // processFunction: () => ()
      },
      {
        title: "Výdaj",
        id: "expense"
      },
      {
        title: "Vše",
        id: "all"
      }
    ]
  };

  componentDidMount() {
    //this.setState({ transaction: data.sort((a, b) => b.id - a.id) });
    axios.get("/transactions").then(response => {
      this.setState({
        transaction: response.data
      });
    });
  }

  addTransaction = () => {
    const transactionCopy = [
      ...this.state.transaction,
      { ...this.state.newTransaction, id: +new Date() }
    ].sort((a, b) => b.id - a.id);
    axios
      .post("/transactions", this.state.newTransaction)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    this.setState({ transaction: transactionCopy });
  };

  filter = filter => {
    axios.get("transactions").then(respons => {
      this.setState({
        transaction: respons.data.filter(record => {
          return record.type === filter || filter === "all";
        })
      });
    });
  };

  handleImputChange = event => {
    const { id, value } = event.target;
    this.setState(prevstate => ({
      newTransaction: { ...prevstate.newTransaction, [id]: value }
    }));
  };

  timeFormat = linuxTimeStamp => {
    let date = new Date(linuxTimeStamp);
    return (
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    );
  };

  render() {
    const {
      newTransaction: { name, value, type },
      buttons
    } = this.state;
    return (
      <div>
        <Header>
          <h1>Šrajtofle</h1>
          <Filter funkce={this.filter} buttons={buttons} />
        </Header>

        <Container>
          <TableView
            timeFormat={this.timeFormat}
            data={this.state.transaction}
          />
        </Container>

        <Footer>
          <Button onClick={this.addTransaction}>Přidat</Button>
          <form>
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.handleImputChange}
            />
            <input
              type="number"
              id="value"
              value={value}
              onChange={this.handleImputChange}
            />
            <select value={type} id="type" onChange={this.handleImputChange}>
              <option value="income">Income</option>
              <option value="extends">Extends</option>
            </select>
          </form>
          <Link to="/overview">Přehled</Link>
        </Footer>
      </div>
    );
  }
}

export default Transaction;

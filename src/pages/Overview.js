import React, { Component } from "react";
import data from "../data.json";
import Header from "../components/shared/Header";
import Container from "../components/shared/Container";
import Footer from "../components/shared/Footer";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

class Overview extends Component {
  state = {
    transaction: [],
    buttons: [
      {
        title: "Den",
        id: "day"
        // processFunction: () => ()
      },
      {
        title: "Měsíc",
        id: "month"
      },
      {
        title: "Vše",
        id: "all"
      }
    ]
  };

  filter = () => {
    //TODO: dopsat
  };

  componentDidMount() {
    this.setState({ transaction: data });
  }

  render() {
    return (
      <div>
        <Header>
          <h1>Šrajtofle - přehled</h1>
          <Filter funkce={this.filter} buttons={this.state.buttons} />
        </Header>
        <Container />
        <Footer>
          <Link to="/">Transakce</Link>
        </Footer>
      </div>
    );
  }
}

export default Overview;

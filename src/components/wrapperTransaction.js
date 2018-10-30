import React, { Component } from "react";
import axios from "../axios";

const WrapperTransaction = Wrapper => {
  return class extends Component {
    state = {
      transaction: [],
      newTransaction: {
        name: "",
        value: 0,
        type: "income",
        id: 0
      }
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
      //this.setState({ transaction: transactionCopy });
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
      console.log(this.state);
      return (
        <Wrapper
          addTransaction={this.addTransaction}
          filter={this.filter}
          handleImputChange={this.handleImputChange}
          timeFormat={this.timeFormat}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
};

export default WrapperTransaction;

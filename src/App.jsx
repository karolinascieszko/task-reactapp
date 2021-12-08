import axios from "axios";
import Quotes from "./components/Quotes";
import styles from "./Styles.module.css";
import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  state = {
    quotes: [],
    randomNumber: 0,
    previousNumber: 0,
  };

  componentDidMount() {
    axios
      .get(
        `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`
      )
      .then((res) => {
        const quotes = res.data;
        this.setState({ quotes });
      })
      .then(() => {
        this.generateRandomQuote();
      })
      .catch(console.log);
  }

  generateRandomQuote = () => {
    this.setState({ previousNumber: this.state.randomNumber });
    this.setState({
      randomNumber: Math.floor(Math.random() * this.state.quotes.length),
    });
  };

  previousQuote = () => {
    this.setState({ randomNumber: this.state.previousNumber });
  };

  render() {
    const { quotes, randomNumber } = this.state;
    return (
      <div className="App">
        <h1 className={styles.title}>Wyświetlanie losowego cytatu</h1>
        {quotes.length > 0  ? (
          <Quotes quotes={quotes} randomNumber={randomNumber} />
        ) : null}
        <button className={styles.btnPrevious} onClick={this.previousQuote}>
          Poprzedni cytat
        </button>
        <button className={styles.btnRandom} onClick={this.generateRandomQuote}>
          Losuj następny cytat
        </button>
      </div>
    );
  }
}

export default App;

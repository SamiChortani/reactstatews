import "./App.css";
import Person from "./components/Profile";
import React, { Component } from "react";

export default class App extends Component {
   state={
      show: true,
      count: 0,
    };
  

  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }
  reset() {
    if (this.state.show) {
      this.setState({ count: 0 });
    }
  }
  render() {
    return (
      <div className="App">
        <button
          className="button-53"
          onClick={() => {
            this.setState({ show: !this.state.show });
            this.reset();
          }}
        >
          Click to Hide profile
        </button>
        {this.state.show ? (
          <Person />) : (
          <h2 style={{  background: "#cef",border: "thistle outset 11px",
              width: "55px",height: "35px", margin: "30px auto",}} >
            
            {this.state.count}
          </h2>
        )}
      </div>
    );
  }
}

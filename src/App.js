import React, { Component } from "react";
import Posts from "./components/Posts";
import Postform from "./components/Postform";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dummy Blog</h1>
        <Postform />
        <br />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;

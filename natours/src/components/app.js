import React from "react";

import Features from "./features";
import Header from "./header";
import Main from "./main"

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {/* <GridTest /> */}
        <Main />
        <Features />
      </div>
    );
  }
}

export default App;

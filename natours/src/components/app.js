import React from "react";

import Features from "./features";
import Header from "./header";
import Main from "./main";
import Stories from "./stories";
import Tours from "./tours";

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {/* <GridTest /> */}
        <Main />
        <Features />
        <Tours />
        <Stories />
      </div>
    );
  }
}

export default App;

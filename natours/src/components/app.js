import React from "react";

import Booking from "./booking";
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
        <Booking />
      </div>
    );
  }
}

export default App;

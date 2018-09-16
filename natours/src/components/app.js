import React from "react";

import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Navigation from "./nav";

class App extends React.Component {
  render () {
    return (
      <div>
        <Navigation />
        <Header />
        {/* <GridTest /> */}
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

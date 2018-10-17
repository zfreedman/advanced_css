// import logo from './logo.svg';
import React, { Component } from 'react';

import Features from "./Features";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Homes from "./Homes";
import Realtors from "./Realtors";
import Sidebar from "./Sidebar";
import StoryContent from "./StoryContent";
import StoryPictures from "./StoryPictures";
// import Story from "./Story";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <StoryContent />
        <StoryPictures />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;

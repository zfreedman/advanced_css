import React from "react";

import Logo from "./logo";
import SearchBar from "./searchbar";
import UserNav from "./userNav";

export default () => {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <UserNav />
    </header>
  );
};

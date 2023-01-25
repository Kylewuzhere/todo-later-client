import React from "react";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <header>
      <h1 className="app-name">Todo Later</h1>
      <LoginButton />
    </header>
  );
};

export default Header;

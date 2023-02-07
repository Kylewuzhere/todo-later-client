import React from "react";
import LoginButton from "./LoginButton";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-bg">
      <div className="container d-flex">
        <div className="justify-content-start">
          <h1 className="app-name mx-3">Todo Later</h1>
        </div>
        <nav className="navbar">
          <button className="btn bg-light mx-3">Home</button>
          <LoginButton className="mx-3" />
        </nav>
      </div>
    </header>
  );
};

export default Header;

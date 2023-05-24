import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "../styles/Header.css";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    console.log(user, isAuthenticated);
  }
  return (
    <header className="header-bg">
      <div className="container d-flex">
        <div className="justify-content-start">
          <h1 className="app-name mx-3">Todo Later</h1>
        </div>
        <nav className="navbar">
          <button className="btn bg-light mx-3">Home</button>
          {isAuthenticated ? (
            <>
              <LogoutButton className="mx-3" />
            </>
          ) : (
            <LoginButton className="mx-3" />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

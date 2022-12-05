import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <header className="d-flex">
      <h1 className="justify-content-start">Swetha</h1>
      <Navigation
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </header>
  );
}

export default Header;

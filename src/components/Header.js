import React from "react";
import Navigation from "./Navigation";

//header component
function Header(props) {
  return (
    <header className="header d-flex">
      <h1 className="justify-content-start">Swetha Pothuganti</h1>
      <Navigation
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </header>
  );
}

export default Header;

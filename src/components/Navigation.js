import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a
          href="#about me"
          onClick={() => handlePageChange("About me")}
          className={
            currentPage === "About me" ? "nav-link active" : "nav-link"
          }
        >
          About me
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;

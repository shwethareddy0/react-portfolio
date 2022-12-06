import React from "react";
//container for header links
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item ">
        <a
          href="#about me"
          onClick={() => handlePageChange("About me")}
          className={
            currentPage === "About me" ? "nav-link active" : "nav-link"
          }
        >
          <h3>About me</h3>
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
          <h3>Portfolio</h3>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          <h3>Contact</h3>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          <h3>Resume</h3>
        </a>
      </li>
    </ul>
  );
}

export default Navigation;

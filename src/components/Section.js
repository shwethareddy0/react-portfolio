import React from "react";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function Section({ currentPage }) {
  const renderPage = () => {
    if (currentPage === "About me") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  return <div>{renderPage()}</div>;
}
export default Section;

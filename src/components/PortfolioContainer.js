import React, { useState } from "react";

import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

// root container
function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About me");
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <Section currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default PortfolioContainer;

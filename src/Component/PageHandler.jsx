// importing pages ٩(＾◡＾)۶
import NavBar from "./Header/Header.jsx";
import { AboutPage } from "./About-me/index.jsx";
import { ProjectsPage } from "./Portfolio/index";
import { ContactPage } from "./Contact-Me/index.jsx";
import { useState } from "react";

// function for Page Handler (◕‿◕)
function PageHandler() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    if (currentPage === "about") {
      return <AboutPage />;
    }
    if (currentPage === "portfolio") {
      return <ProjectsPage />;
    }
    if (currentPage === "resume") {
      return <Blog />;
    }
    if (currentPage === "contact") {
      return <ContactPage />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}

// exporting function (´◡`)
export default PageHandler;

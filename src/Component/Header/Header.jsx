// importing styling ٩(＾◡＾)۶
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../../styles/Header.css";

// function for nav bar (◕‿◕)
// eslint-disable-next-line react/prop-types
function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="nav justify-content-center me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange("about")}
                  className={
                    currentPage === "about" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("portfolio")}
                  className={
                    currentPage === "portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange("resume")}
                  className={
                    currentPage === "resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  href="#contactme"
                  onClick={() => handlePageChange("contact")}
                  className={
                    currentPage === "contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact Me
                </a>
              </li>
            </ul>
            <span className="navbar-text nav-link">Built with</span>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img
                src={viteLogo}
                className="navbar-brand logo"
                alt="Vite logo"
              />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img
                src={reactLogo}
                className="navbar-brand logo react"
                alt="React logo"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

// exporting function (´◡`)
export default NavBar;

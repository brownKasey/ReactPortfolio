import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../../styles/Header.css";

function NavBar() {
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Me
                </a>
              </li>
            </ul>
            <span className="navbar-text">Built with</span>
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

export default NavBar;

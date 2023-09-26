// importing styling ٩(＾◡＾)۶
import "../../styles/Footer.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/Linked-in.svg";
import email from "../../assets/email.svg";

// function for footer (◕‿◕)

function Footer() {
  return (
    <ul className="nav fixed-bottom justify-content-center">
      <li className="nav-item">
        <a
          className="nav-link active"
          aria-current="page"
          href="https://github.com/brownKasey"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} className="navbar-brand logo" alt="Github logo" />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link active"
          aria-current="page"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="navbar-brand logo" alt="Github logo" />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link active"
          aria-current="page"
          href="mailto:kaseyabrown28@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} className="navbar-brand logo" alt="Github logo" />
        </a>
      </li>
    </ul>
  );
}

// exporting function (´◡`)
export default Footer;

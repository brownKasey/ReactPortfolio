// importing styling ٩(＾◡＾)۶
import "../../styles/Portfolio.css";
import MMD from "../../assets/MMD-Home-page.png";
import WD from "../../assets/Weather-Dashboard.png";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
              <img className="card-img-top" src={MMD} alt=""></img>

              <div className="card-body">
                <h5 className="card-title">Make My Drink</h5>
                <p className="card-text">
                  A web application that allows users to find recipes for
                  user-specified alcoholic drinks. These recipes will include a
                  picture of the specified drink, and instructions on how to
                  prepare and serve it.
                </p>

                <a
                  href="https://brownkasey.github.io/Make-My-Drink/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  Website Link
                </a>
                <a
                  href="https://brownkasey.github.io/Make-My-Drink/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card">
              <img className="card-img-top" src={WD} alt=""></img>

              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">
                  Weather Dashboard is a web application that was made so you
                  can find out the current weather forercast of whatever city
                  you search, along with a forecast for the next 5 days. It will
                  show the city you searched for last.
                </p>
                <a
                  href="https://brownkasey.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  Website Link
                </a>
                <a
                  href="https://github.com/brownKasey/Weather-Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// exporting function (´◡`)
export default Projects;

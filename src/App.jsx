import "./styles/index.css";
import background from "./assets/background.jpg";
import { FooterPage } from "./Component/Footer/index";
import PageHandler from "./Component/PageHandler";
function App() {
  return (
    <>
      <div className="main">
        <div className="overlay">
          <img src="./assets/background.jpg" />
        </div>

        <div className="content">
          <PageHandler />
          <FooterPage />
        </div>
      </div>
    </>
  );
}

export default App;

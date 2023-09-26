import "./styles/index.css";
// import video from "./assets/background-2.mp4";
import { FooterPage } from "./Component/Footer/index";
import PageHandler from "./Component/PageHandler";
function App() {
  return (
    <>
      <div className="main">
{/*         <div className="overlay">
          <video src={video} autoPlay loop muted />
        </div> */}

        <div className="content">
          <PageHandler />
          <FooterPage />
        </div>
      </div>
    </>
  );
}

export default App;

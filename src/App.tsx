import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles.scss";
import Navbar from "./components/Navbar";
import MainPage from "./MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-radial sm:px-6 px-3 min-h-screen h-full w-screen">
          <Navbar />
          <MainPage />
          <div className="flex justify-center pb-8 items-center">
            <h1 className="text-white text-[12px] font-robotoRegular">
              Powered by <span className="font-robotoBold">TechTrove Tech</span>
            </h1>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

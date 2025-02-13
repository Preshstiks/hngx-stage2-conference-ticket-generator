import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles.scss";
import Navbar from "./components/Navbar";
import MainPage from "./MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-radial px-6 min-h-screen h-full w-screen">
          <Navbar />
          <MainPage />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

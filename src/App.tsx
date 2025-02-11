import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-radial w-screen">
          <Navbar />
          <MainPage />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

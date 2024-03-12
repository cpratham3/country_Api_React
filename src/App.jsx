import "./App.css";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <>
      <Home></Home>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/single/:name" element={<SingleCountry />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

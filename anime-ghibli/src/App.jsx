import "./App.css";
import Navbar from "./components/Navbar";
import FilmCards from "./components/FilmCards";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Navbar />
                <FilmCards />
              </Fragment>
            }
          ></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

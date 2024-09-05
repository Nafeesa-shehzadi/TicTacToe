import React from "react";
import ReactDOM from "react-dom/client";
import WelcomeScreen from "./components/welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Game from "./components/Game";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

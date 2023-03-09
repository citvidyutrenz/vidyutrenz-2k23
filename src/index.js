import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./components/Projects";
import About from "./components/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/events" element={<Projects />} />
        <Route path="/about" element={<About />} />


      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);

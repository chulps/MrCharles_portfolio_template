// index.js
import React from "react";
import ReactDOM from "react-dom";
// import global styles
import "./GLOBAL_STYLES/styles.css";
import "./GLOBAL_STYLES/responsive.css";
import Site from "./COMPONENTS/SITE/site.js"

function App() {
  return (
    <Site/>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

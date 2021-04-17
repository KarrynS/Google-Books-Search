import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Google Books Search</h1>
          <p className="lead">Search for and save books of Interest</p>
        </div>
        {children}
      </div>
    </>
  );
}

export default Jumbotron;

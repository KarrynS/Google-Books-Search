import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Google Books Search</h1>
          <p class="lead">Search for and save books of Interest</p>
        </div>
        {children}
      </div>
    </>
  );
}

export default Jumbotron;

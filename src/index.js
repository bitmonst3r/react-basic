import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading
//It should display an unrodered list
//It should contain 3 list elements
//Usually you can only add one element on first render parameter but to work
// around that and add more elements we can use a <div> tag

ReactDOM.render(
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Ramen</li>
      <li>Tacos</li>
      <li>Mole</li>
    </ul>
  </div>,
  document.getElementById("root")
);

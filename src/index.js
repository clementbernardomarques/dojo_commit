import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Home";

const listMeal = ["Eggs", "Pasta", "Queijo Coalho"];

ReactDOM.render(
  <Home firstMeal={listMeal[0]} secondMeal={listMeal[1]} thirdMeal={listMeal[2]}></Home>,
  document.getElementById("root")
);
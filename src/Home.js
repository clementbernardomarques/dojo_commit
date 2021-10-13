import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Home = ( { firstMeal, secondMeal, thirdMeal }) => {
    return (
        <div>
            <h1>My Favourite Foods</h1>
            <ul>
                <li> { firstMeal } </li>
                <li> { secondMeal } </li>
                <li> { thirdMeal } </li>
            </ul>
        </div>
    )
}

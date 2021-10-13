import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Home = ( { firstMeal, secondMeal, thirdMeal }) => {
    let [showList, updateShowList] = useState(false);
    console.log(showList)
    return (
        <div>
            <h1>My Favourite Foods</h1>
            <button onClick={() => {updateShowList(!showList);}}>Show me</button>
            <div style={{display: showList ? "" : "none"}}>
                <ul>
                    <li>{firstMeal}</li>
                    <li>{secondMeal}</li>
                    <li>{thirdMeal}</li>
                </ul>
            </div>
        </div>
    )
}

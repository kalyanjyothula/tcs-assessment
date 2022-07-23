import React, { useState } from "react";
import "./elements.css";

export default function Model({
  name,
  updateData,
  isOpenClick,
  isOpen,
  index,
  appData,
}) {
  const [rating, setRating] = useState("5.0");
  const handleUpdateData = (e) => {
    let newArr = [...appData];
    newArr[index].rating.push(+rating);
    updateData(newArr);
    isOpenClick(false); 
  };
  return (
    <div className="model-container">
      <div className="model-box">
        <h3>
          Please Rate here for <u>{name}</u> !
        </h3>
        <h4>{rating}</h4>
        <input
          type="range"
          id="points"
          name="points"
          min="0"
          max="5"
          step={0.5}
          onChange={({ target }) => setRating((+target.value * 1.0).toFixed(1))}
        />
        <div className="button-container">
          <button onClick={handleUpdateData}>Rate</button>
          <button onClick={(e) => isOpenClick(!isOpen)}>Close</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import RSrc from "./Jio.png";
import "./elements.css";

export default function ItemListView({
  name,
  id,
  index,
  rating,
  isOpenClick,
  isOpen,
  handleIndex,
}) {
  const calculate = () => {
    const rate = rating.reduce((x, y) => x + y, 0);
    const out = rating.length > 1 ? (rate / rating.length).toFixed(1) : "0.0";
    return out;
  };

  const handleRatingChange = (e) => {
    e.preventDefault();
    handleIndex(index);
    isOpenClick(!isOpen);
  };

  return (
    <section className="item-container">
      <div className="img-container">
        <img src={RSrc} alt="img" />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
      <div className="rating-container" onClick={handleRatingChange}>
        <img src={RSrc} alt="img" />
        <span>{calculate()}</span>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import "./GameItem.css";

const GameItem = ({ image, price }) => {
  const [isHover, setIsHover] = useState(false);
  const [thisPrice, setThisPrice] = useState(price);

  const MyIterval = () => {
    setInterval(() => {
      setThisPrice((prev) => (parseFloat(prev) + 0.01).toFixed(2));
    }, 1000);
  };

  useEffect(() => {
    // return () => {
    MyIterval();
    // };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="game-item-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <div className="play-icon"> asdasd </div>}
      <button className="game-item-price">
        {" "}
        {isHover ? <span>JUEGA AHORA</span> : <span>{thisPrice}</span>}
      </button>
    </div>
  );
};

export default GameItem;

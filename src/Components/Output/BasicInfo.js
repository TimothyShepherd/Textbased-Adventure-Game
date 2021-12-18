import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const BInfo = () => {
  const value = useSelector((state) => state.gold);
  const player = useSelector((state) => state.player);

  return (
    <div className="printing">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-4">
            <p style={{ borderColor: "red" }}>HP: {player.hp}</p>
            <p style={{ borderColor: "yellow" }}>GOLD: {value}</p>
          </div>

          <div className="col-lg-4">
            <p style={{ borderColor: "blue" }}>Position X: {player.x}</p>
            <p style={{ borderColor: "purple" }}>Position Y: {player.y}</p>
          </div>
          <div className="col-lg-4">
            <p style={{ borderColor: "green" }}>Level: {player.xp.level}</p>
            <p style={{ borderColor: "orange" }}>XP: {player.xp.number} of 100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BInfo;

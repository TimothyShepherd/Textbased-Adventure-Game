import React, { useEffect } from "react";

import Buttonks from "../Components/buttonsStore";
import Options2 from "../Components/moreOptions";
import BTNOutput from "../Components/Output/Output";
import BInfo from "../Components/Output/BasicInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MovementB from "../Components/MovementOptions";
import Map from "../Components/Map/Map";

export function MapManage() {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const player = state.player;
  const dispatch = useDispatch();
  const tile = state.tiles[player.x][player.y];

  useEffect(() => {
    // Update the document title using the browser API
    if (Map.flag == true) {
        Map.move(state.player.x, state.player.y);
    }
    let t = tile;
    if (t == "enemy") {
      let enemy = state.tiles[player.x]["name"];
      dispatch({ type: "setEnemy", payload: enemy });
      dispatch({ type: "tile", payload: t });
      navigate("/test_fight");
    }
    if (t == "shop") {
      dispatch({ type: "tile", payload: t });
      navigate("/shop");
    }
    if (t == "event") {
      dispatch({ type: "tile", payload: t });
      navigate("/event");
    }
    console.log("parent useEffect");
  }, [state]);

  function Invent() {
    navigate("/inventory");
  }

  const moveUp = () => {
    if (state.player.x < 7) {
      dispatch({ type: "advanceX" });
    }
    if (state.player.y > 0) {
      dispatch({ type: "retreatY" });
    }
    //let x = state.player.x + 1;
    //let y = 0;
    // Map.move(x, y);
  };

  const moveDown = () => {
    if (state.player.x < 7) {
      dispatch({ type: "advanceX" });
    }
    if (state.player.y < 1) {
      dispatch({ type: "advanceY" });
    }
    //let x = state.player.x + 1;
    //let y = (state.player.y = 1);
    // Map.move(x, y);
  };

  return (
    <div>
      <BInfo />
      <h1>{state.tiles[player.x][player.y]}</h1>
      <MovementB />
      <input type="button" value="Go to Inventory" onClick={Invent} />
    </div>
  );
}

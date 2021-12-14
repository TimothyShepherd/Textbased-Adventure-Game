import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BTNOutput from "./Output/Output";
import "./style.css";

//Define a component that will use dispatcher
//Note we require an import
const Info = () => {
  const state = useSelector((state) => state);
  const items = state.items;

  const player = state.player;
  const abilities = state.abilities;
  const currentWeapon = state.player.currentWeapon;
  const currentWeaponStats = {
    ...items[currentWeapon],
    skills: items[currentWeapon].skills.length,
  };
  const inventory = player.inventory;
  const potions = state.potions;

  //Dispatch actually SENDS AN OBJECT
  //TYPE is a KEY with : 'VALUE'
  //You can put as much data as you like.
  const dispatch = useDispatch();
  //increase and decrease gold

  //Add XP by value
  const weaponSelect = (e) => {
    //let x = document.getElementById("weapon")
    let x = e.target.value;
    dispatch({ type: "weaponSelect", payload: x });
  };

  const usePotion = (e) => {
    let name = e.target.name;
    if (player.potions[name] > 0) {
      dispatch({ type: "hpInc", payload: potions[name] });
      dispatch({ type: "removePotion", payload: name, quantity: 1 });
    }
  };

  return (
    <>
      <div className="container-lg" style={{
          background: "rgb(24, 24, 24)",
          border: "3px solid",
          borderRadius: "10px",
          borderColor: "black",
          padding: "10px"
          }}>
        <div className="row">
          <div className="col-lg-4">
            <p style={{ borderColor: "red" }}>HP: {player.hp}</p>
          </div>
          <div className="col-lg-4">
            <p style={{ borderColor: "gold" }}>Gold earned: {state.gold}</p>
          </div>
          <div className="col-lg-4">
            <p style={{ borderColor: "green" }}>Level: {player.xp.level}</p>
            <p style={{ borderColor: "green" }}>
              XP: {player.xp.number} of 100
            </p>
          </div>
        </div>

        <h1>Weapon: {player.currentWeapon}</h1>
        <select onChange={weaponSelect} value={currentWeapon} id="weapon">
          {Object.keys(inventory).map((weapon) => (
            <option key={weapon} value={weapon}>
              {weapon}
            </option>
          ))}
        </select>
        <h2>Stats: </h2>
        {Object.keys(currentWeaponStats).map((key) => (
          <li key={key}>
            {key}: {currentWeaponStats[key]}
          </li>
        ))}
        <h2>Abilities: </h2>
        {
          items[currentWeapon].skills.map((c) => (
            <li key={c}>
              {"\t" +
                c +
                ":" +
                Object.keys(abilities[c]).map(
                  (multiplier) =>
                    "\t" + multiplier + ": " + abilities[c][multiplier]
                )}
            </li>
          ))
          //my.map((c)=>console.log(Object.keys(abilities[c]).map((multiplier)=>console.log(multiplier+": "+abilities[c][multiplier]))))
        }
        <h2>Potions:</h2>
        <div>
          {Object.keys(player.potions).map((key) => (
            <li>
              {key}:{player.potions[key]}
              <button name={key} onClick={usePotion}>
                USE
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Info;

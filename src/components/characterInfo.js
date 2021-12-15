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
      <div
        className="container-lg"
        style={{
          background: "rgb(24, 24, 24)",
          border: "3px solid",
          borderRadius: "10px",
          borderColor: "black",
          padding: "10px",
          textTransform: "uppercase",
        }}
      >
        <div className="row">
          <div className="col-lg-4">
            <p style={{ borderColor: "red" }}>
              HP: {player.hp}
              <br />
              ---------------------------------
              <h2 style={{ marginTop: "10px", fontWeight: "bold" }}>Potions:</h2>
              <div>
                <div className="container">
                  <div className="row">
                    {Object.keys(player.potions).map((key) => (
                      <div className="col-lg-4">
                        <b style={{ fontSize: "17px" }}>
                          {key}: {player.potions[key]}<br />
                          <button
                            className="btn"
                            name={key}
                            onClick={usePotion}
                            style={{
                              margin: "10px",
                              fontWeight: "bold",
                              borderColor: "orange",
                              backgound: "black",
                              color: "gold",
                              textTransform: "uppercase",
                            }}
                          >
                            USE
                          </button>
                        </b>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </p>
          </div>
          <div className="col-lg-4">
            <p style={{ borderColor: "gold" }}>
              Gold earned: {state.gold}
              <br />
              ---------------------------------
              <div className="container" style={{ paddingTop: "5px" }}>
                <div className="row">
                  <h1 style={{ marginLeft: "5px", fontWeight: "bold" }}>Weapon: </h1>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={weaponSelect}
                    value={currentWeapon}
                    id="weapon"
                    style={{
                      maxWidth: "230px",
                      marginBottom: "15px",
                      marginLeft: "80px",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    {Object.keys(inventory).map((weapon) => (
                      <option key={weapon} value={weapon}>
                        {weapon}
                      </option>
                    ))}
                  </select>
                  <br />
                  <h2 style={{fontWeight: "bold"}}>Stats: </h2>
                  {Object.keys(currentWeaponStats).map((key) => (
                    <li key={key}>
                      {key}: {currentWeaponStats[key]}
                    </li>
                  ))}
                  <h2 style={{marginTop: "15px", fontWeight: "bold"}}>Abilities: </h2>
                  {
                    items[currentWeapon].skills.map((c) => (
                      <li key={c}>
                        {"\t" +
                          c +
                          ":" +
                          Object.keys(abilities[c]).map(
                            (multiplier) =>
                              "\t" +
                              multiplier +
                              ": " +
                              abilities[c][multiplier]
                          )}
                      </li>
                    ))
                    //my.map((c)=>console.log(Object.keys(abilities[c]).map((multiplier)=>console.log(multiplier+": "+abilities[c][multiplier]))))
                  }
                </div>
              </div>
            </p>
          </div>

          <div className="col-lg-4">
            <p style={{ borderColor: "green" }}>
              Level: {player.xp.level}
              <br />
              ---------------------------------
              <br />
              <h1 style={{fontWeight: "bold", marginTop: "5px"}}>EXPERIENCE:</h1> {player.xp.number} of 100
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

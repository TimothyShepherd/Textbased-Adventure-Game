import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import HitSound from "../soundeffects/3.wav";

export function MockFight(props) {
  console.log("Mock Fight Rendered");
  const state = useSelector((state) => state);
  const player = state.player;
  const enemy = state.enemies.current;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = state.items;
  const abilities = state.abilities;
  useEffect(() => {
    // Update the document title using the browser API
    if (player.currentTile == "general") {
      navigate("/map_manage");
    }
    if (player.currentTile == "event") {
      dispatch({ type: "setTile", payload: "general" });
      dispatch({ type: "tile", payload: "general" });
      navigate("/map_manage");
    }
    if (player.currentTile == "records") {
      navigate("/records");
    }
    if (player.currentTile == "lose") {
      console.log("active");
      navigate("/lose");
    }
  }, [player]);

  const [play] = useSound(HitSound, {
    playbackRate: 1,
    volume: 0.5,
  });

  const mapExit = () => {
    dispatch({ type: "tile", payload: "general" });
  };
  const hpInc = () => {
    dispatch({ type: "hpInc", payload: 100 });
  };

  const hpDec = () => {
    dispatch({ type: "hpDec", payload: 20 });
  };

  const action = (e) => {
    //as String
    let current = e.target.value;
    console.log(current);
    let plyrSPD = speed(player.currentWeapon, current);
    let enemySPD = speed(
      enemy.weapon,
      items[enemy.weapon].skills[enemy.ability],
      play()
    );

    //Returns the new total HP
    let newhp = damageToEnemy(current);
    newhp = parseInt(newhp).toFixed(1);
    let newxp = enemy.xp;
    if (newhp <= 0) {
      newhp = 0;
      dispatch({ type: "addXp", payload: enemy.xp });
      dispatch({ type: "addGold", payload: enemy.gold });
      newxp = 0;
      if (enemy.name == "BlueBeard") {
        dispatch({ type: "setTile", payload: "records" });
        dispatch({ type: "tile", payload: "records" });
      } else {
        dispatch({ type: "setTile", payload: "general" });
        dispatch({ type: "tile", payload: "general" });
      }
    }

    let newenemy = { ...enemy, hp: newhp, xp: newxp };

    dispatch({ type: "dmgEnemy", payload: newenemy });
    dispatch({ type: "setEnemyMove" });

    let playerDmg = damageToPlayer();

    //Does defense apply? Must be done this exact way, comparing the values directly sometimes causes java to -mess up-
    //in the following absurd way: "5<4 is true"
    let difference = plyrSPD - enemySPD;
    if (difference >= 0) {
      playerDmg = playerDmg - defense(player.currentWeapon, current);
    }
    //least amount of damage
    if (playerDmg < 0) {
      playerDmg = 1;
    }
    if (playerDmg > player.hp) {
      dispatch({ type: "setTile", payload: "lose" });
      dispatch({ type: "tile", payload: "lose" });
    }

    dispatch({ type: "hpDec", payload: playerDmg });
  };

  function damageToEnemy(current) {
    let att = items[player.currentWeapon].att;
    let attMul = abilities[current].attMul;
    let damage = attMul * att;

    let plyrSPD = speed(player.currentWeapon, current);
    let enemySPD = speed(
      enemy.weapon,
      items[enemy.weapon].skills[enemy.ability]
    );
    if (enemySPD > plyrSPD) {
      damage =
        damage -
        defense(enemy.weapon, items[enemy.weapon].skills[enemy.ability]);
    }

    if (damage < 0) {
      damage = 2;
    }

    let newhp = (enemy.hp - damage).toFixed(1);

    return newhp;
  }

  function damageToPlayer() {
    let att = items[enemy.weapon].att;
    let attMul = abilities[items[enemy.weapon].skills[enemy.ability]].attMul;
    let damage = attMul * att;
    return damage.toFixed(1);
  }

  //weapon name
  //ability name
  function damage(weapon, ability) {
    let att = items[weapon].att;
    let mul = abilities[ability].attMul;
    return (att * mul).toFixed(1);
  }

  function defense(weapon, ability) {
    let def = items[weapon].def;
    let mul = abilities[ability].defMul;
    return (def * mul).toFixed(1);
  }

  function speed(weapon, ability) {
    return (items[weapon].spd * abilities[ability].spd).toFixed(1);
  }

  function Invent() {
    navigate("/inventory");
  }

  return (
      <div className="container" style={{
        background: "rgb(24, 24, 24)",
        border: "3px solid",
        borderRadius: "10px",
        borderColor: "black",
        padding: "10px"
        }}>
    <div style={{ background: "rgb(24, 24, 24)", textTransform: "uppercase" }}>
      <div className="enemy">
        <h2
          className="App-header"
          style={{ fontSize: "50px", margin: "40px", paddingTop: "30px" }}
        >
          You Encountered A Fight!
        </h2>
        <p style={{ borderColor: "red" }}>{enemy.name}</p>
        <div className="container-lg" style={{}}>
          <div className="row">
            <div className="col-lg-4">
              <p style={{ borderColor: "red" }}>
                Weapon: {enemy.weapon}
                <br />
                -----------------------
                <br /> Move: {items[enemy.weapon].skills[enemy.ability]}
              </p>
            </div>
            <div className="col-lg-4">
              <p style={{ borderColor: "red" }}>HP:{enemy.hp}</p>
            </div>
            <div className="col-lg-4">
              <p style={{ borderColor: "red" }}>
                {" "}
                Damage: {damageToPlayer()}
                <br /> Defense:{" "}
                {defense(
                  enemy.weapon,
                  items[enemy.weapon].skills[enemy.ability]
                )}
                <br /> Speed:{" "}
                {speed(enemy.weapon, items[enemy.weapon].skills[enemy.ability])}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="player">
        <div
          className="container-lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="row align-items-end"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p
              style={{
                borderColor: "green",
                padding: "10px",
                maxWidth: "700px",
              }}
            >
              Weapon: {player.currentWeapon}
              <br />
              -----------------------
              <br /> Moves:
              <div className="contianer-fluid-lg" style={{ padding: "10px" }}>
                <div className="row" style={{ borderColor: "green" }}>
                  {items[player.currentWeapon].skills.map((c) => (
                    <div className="col-lg">
                      <b key={c} style={{ borderColor: "green" }}>
                        <button
                          className="btn"
                          value={c}
                          onClick={action}
                          style={{
                            fontWeight: "bold",
                            borderColor: "orange",
                            backgound: "gray",
                            color: "gold",
                            textTransform: "uppercase",
                          }}
                        >
                          {c}
                        </button>
                        <br />
                        {"\t" +
                          "Damage: " +
                          damage(player.currentWeapon, c) +
                          "\n" +
                          "Defence: " +
                          defense(player.currentWeapon, c) +
                          "\n" +
                          "Speed: " +
                          speed(player.currentWeapon, c)}
                        &nbsp;
                      </b>
                    </div>
                  ))}
                </div>
              </div>
            </p>
            <div className="col-lg-4" style={{}}></div>
            <div className="col-lg-4" style={{}}>
              <p style={{ borderColor: "green" }}>HP: {player.hp}</p>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <p style={{ borderColor: "green" }}>Joseph</p>
      </div>
      <button
        className="btn btn-danger"
        style={{
          fontSize: "30px",
          margin: "15px",
          fontFamily: "revert",
          fontWeight: "bold",
          textShadow: "2px 1px 2px black",
          borderColor: "black",
        }}
        onClick={Invent}
      >
        Inventory
      </button>

      <br />
      <br />
    </div>
    </div>
  );
}

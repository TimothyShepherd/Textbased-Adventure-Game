import React, { useState, useEffect } from "react";

import Options2 from "../Components/moreOptions.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export function Shop() {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const player = state.player;
  const itemsState = state.items;
  const potions = state.potions;
  const [item, setItems] = useState({
    ...itemsState,
    sword: {
      ...itemsState.sword,
      random: Math.floor(Math.random() * (41 - 20) + 20),
    },
    axe: {
      ...itemsState.axe,
      random: Math.floor(Math.random() * (41 - 20) + 20),
    },
    knife: {
      ...itemsState.knife,
      random: Math.floor(Math.random() * (41 - 20) + 20),
    },
    boxing_gloves: {
      ...itemsState.boxing_gloves,
      random: Math.floor(Math.random() * (41 - 20) + 20),
    },
  });
  if (typeof item.fists != "undefined") {
    let it = item;
    delete it.fists;
    setItems(it);
  }

  useEffect(() => {
    // Update the document title using the browser API
    if (player.currentTile == "general") {
      navigate("/map_manage");
    }
  }, [player]);

  const dispatch = useDispatch();
  const redirect = () => {
    navigate("/inventory");
  };
  // console.log(item)

  const hpInc = () => {
    //Order matters: Guard Operator
    if (player.hp < 100 && removeGold(10)) {
      dispatch({ type: "hpInc", payload: 30 });
    }
  };

  function removeGold(value) {
    if (value > state.gold) {
      document.getElementById("goldAlert").innerHTML = "NOT ENOUGH GOLD!";
      return false;
    } else {
      dispatch({ type: "removeGold", payload: value });
      document.getElementById("goldAlert").innerHTML =
        "THANKS FOR YOUR PURCHASE!";
      return true;
    }
  }
  const buyItem = (e) => {
    let value = e.target.innerHTML;

    if (removeGold(value)) {
      payloadAdd(e.target.name);
    }
  };

  const buyPotion = (e) => {
    let value = e.target.innerHTML;
    let name = e.target.name;
    if (removeGold(value)) {
      dispatch({ type: "addPotion", payload: name, quantity: 1 });
    }
  };

  const exitStore = () => {
    dispatch({ type: "setTile", payload: "general" });
    dispatch({ type: "tile", payload: "general" });
  };

  //Inventory
  const payloadAdd = (e) => {
    let x = e;
    dispatch({ type: "addItem", payload: x });
  };
  //Stores should be accessible only once.
  //Stores should generate numbers between 1 and 4 (items available to buy)
  //Should randomly discard n - previous number items available to buy
  //Should generate a range of values to buy an item.
  return (
    <>
      <div
        className="container"
        style={{
          background: "rgb(24, 24, 24)",
          border: "3px solid",
          borderRadius: "10px",
          borderColor: "black",
          padding: "10px",
        }}
      >
        <h2 style={{ fontSize: "50px", fontWeight: "bold", margin: "15px" }}>
          WELCOME TO THE SHOP
        </h2>
        <h2>You can buy an item! </h2>...(for the right price)
        <br />
        <div className="container">
          <div className="row" style={{ paddingTop: "20px" }}>
            <div className="col-sm-6">
              <p style={{ borderColor: "red" }}>
                HP: {player.hp}
                <br />
                ---------------------------------
                <button
                  className="btn"
                  style={{
                    margin: "10px",
                    fontWeight: "bold",
                    borderColor: "orange",
                    color: "gold",
                    textTransform: "uppercase",
                  }}
                  onClick={hpInc}
                >
                  Hire someone to guard you while you sleep
                  <br />
                  (Restores 30 HP for 10 GOLD)
                </button>
                <br />
                <b>Maybe a healing potion instead?!</b>
                <h2 style={{ marginTop: "10px", fontWeight: "bold" }}>
                  Potions:
                </h2>
                <div className="container">
                  <div className="row" style={{ textTransform: "uppercase" }}>
                    {Object.keys(potions).map((key) => (
                      <div className="col-lg-4">
                        <b>
                          {key}: <span></span> <br />
                          <button
                            className="btn"
                            style={{
                              margin: "10px",
                              fontWeight: "bold",
                              borderColor: "orange",
                              backgound: "black",
                              color: "gold",
                              textTransform: "uppercase",
                            }}
                            onClick={buyPotion}
                            name={key}
                          >
                            {potions[key]}
                          </button>
                        </b>
                      </div>
                    ))}
                  </div>
                </div>
              </p>
            </div>
            <div className="col-lg-6" style={{ textTransform: "uppercase" }}>
              <p style={{ borderColor: "gold" }}>
                GOLD: {state.gold}
                <br />
                ---------------------------------
                <div className="container">
                  <div className="row">
                    {Object.keys(item).map((key) => (
                      <>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-4" style={{ marginTop: "20px" }}>
                          {key}: <span></span>{" "}
                        </div>
                        <div className="col-lg-3">
                          <button
                            className="btn"
                            onClick={buyItem}
                            name={key}
                            style={{
                              margin: "10px",
                              fontWeight: "bold",
                              borderColor: "orange",
                              backgound: "black",
                              color: "gold",
                              textTransform: "uppercase",
                            }}
                          >
                            {item[key].random}
                          </button>
                          <br />
                        </div>
                        <div className="col-lg-3"></div>
                      </>
                    ))}
                    <h1 style={{ fontSize: "15px", textAlign: "center" }}>
                      <br />
                      You'll sleep well with one of these under your pillow...
                    </h1>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <h3 id="goldAlert">Buy something!!</h3>
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
          maxWidth: "400px",
        }}
        onClick={exitStore}
      >
        Get Outta Here!
      </button>
    </>
  );
}

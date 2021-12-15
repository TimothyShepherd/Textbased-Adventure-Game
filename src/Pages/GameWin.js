import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export function Records() {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const player = state.player;
  const dispatch = useDispatch();
  const [records, setRecords] = useState({});
  var counter = 0;
  useEffect(() => {
    getTable();
    // Update the document title using the browser API
    let t = player.currentTile;
    if (t != "records") {
    //   dispatch({ type: "tile", payload: t });
    //   navigate("/map_manage");
    }
  }, [counter]);

  function getTable() {
    axios
      .get(`http://localhost:9001/records`)
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  const [name, setName] = useState("name here");

  function naming(e) {
    setName(e.target.value);
  }

  function formSubmit(e) {
    const element = e.target[0].value;
    const element2 = e.target[1].value;
    const data = {
      firstName: element,
      score: element2,
    };

    axios.post(`http://localhost:9001/records`, data).then((res) => {
      //Give time for spring to update database
      document.getElementById("recordsContainer").innerHTML =
        "Submitted, table updates automatically after 5 seconds";
      setTimeout(getTable, 5000);
    });
    e.preventDefault();
  }

  return (
    <div>
      <h1 className="App-header">
        You Win! Submit your score here. Reload to restart.
      </h1>
      <div id="recordsContainer">
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
          <h2>Score: {player.hp + state.gold}</h2>

          <label for="fname" style={{ fontSize: "40px", fontWeight: "bold" }}>
            Enter name:
          </label>
          <br />
          <input type="text" onKeyUp={naming} />
          <br />
          <form
            action="http://localhost:9001/records"
            method="post"
            onSubmit={formSubmit}
          >
            <br />
            <input type="hidden" id="firstName" name="firstName" value={name} />
            <input
              type="hidden"
              id="score"
              name="score"
              value={player.hp + state.gold}
            />
            <input type="submit" value="Submit" />
          </form>
          <br />
          <br />
          <br />

         
        </div>
      </div>
      <h2>List of previous scores:</h2>
          <table className="records">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SCORE</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(records).map((record) => (
                <tr>
                  {Object.keys(records[record]).map((key) => (
                    <td name={counter}>{records[record][key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
}

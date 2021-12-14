import React from "react";
import { useSelector } from "react-redux";

const BInfo=()=>{
    const value = useSelector(state => state.gold)
    const player = useSelector(state => state.player)

    return(
        <div className = "printing" style={{background: "black"}}>
            <h4 style={{
                color: "red",
                fontSize: "30px",
                fontWeight: "bold",
                textShadow: "2px 1px 2px #ff0500"
            }}>
                HP: {player.hp}
            </h4>
            <br/>
            
            <h4 style={{
                color: "yellow",
                fontSize: "30px",
                fontWeight: "bold",
                textShadow: "2px 1px 2px #ff0500"
            }}>
                GOLD: {value}
            </h4>
            <br/>
            <h4 style={{
                color: "blue",
                fontSize: "30px",
                fontWeight: "bold",
                textShadow: "2px 1px 2px #ff0500"
            }}>
                Position X: {player.x}
            </h4>
            <br/>
            <h4 style={{
                color: "purple",
                fontSize: "30px",
                fontWeight: "bold",
                textShadow: "2px 1px 2px #ff0500"
            }}>
                Position Y: {player.y}
            </h4>
            <br/>

            <h4 style={{
                color: "green",
                fontSize: "30px",
                fontWeight: "bold",
                textShadow: "2px 1px 2px #ff0500"
            }}>
                Current Level: {player.xp.level}
            </h4>
            <br/>
            <h4 style={{
                color: "orange",
                fontSize: "30px",
                fontWeight: "bold",
                textShadow: "2px 1px 2px #ff0500"
            }}>
                Current XP: {player.xp.number} out of 100
            </h4>

        </div>
    )
}

export default BInfo;
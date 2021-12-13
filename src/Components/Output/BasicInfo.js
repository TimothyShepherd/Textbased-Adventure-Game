import React from "react";
import { useSelector } from "react-redux";

const BInfo=()=>{
    const value = useSelector(state => state.gold)
    const player = useSelector(state => state.player)

    return(
        <div className = "printing">
            <h4>
                Hp: {player.hp}
            </h4>
            <br/>
            
            <h4>
                Gold earned: {value}
            </h4>
            <br/>
            <h4>
                Position x: {player.x}
            </h4>
            <br/>
            <h4>
                Position y: {player.y}
            </h4>
            <br/>

            <h4>
                Current Level: {player.xp.level}
            </h4>
            <br/>
            <h4>
                Current amount of XP (levels on 100): {player.xp.number}
            </h4>

        </div>
    )
}

export default BInfo;
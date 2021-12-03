import React from "react";
import { useSelector } from "react-redux";

const BTNOutput=()=>{
    const value = useSelector(state => state.gold)
    const player = useSelector(state => state.player)

    return(
        <div className = "printing">
            <h1>
                Gold earned: {value}
            </h1>
            <br/>
            <h1>
                Position x: {player.x}
            </h1>
            <br/>
            <h1>
                Position y: {player.y}
            </h1>
            <br/>
            <h1>
                Number of Axes (added through addItem, not as individual instances): {player.inventory.axe||0}
            </h1>
            <br/>

            <h1>
                Current Level: {player.xp.level}
            </h1>
            <br/>
            <h1>
                Current amount of XP (leves on 100): {player.xp.number}
            </h1>

        </div>
    )
}

export default BTNOutput;
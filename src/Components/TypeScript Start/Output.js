import React from "react";
import { useSelector } from "react-redux";

const BTNOutput=()=>{
    const value = useSelector(state => state.gold)
    const player = useSelector(state => state.player)

    return(
        <div>
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
                Number of Axes (added through addItem, not as individual instances): {player.inventory.axe}
            </h1>
            <br/>

        </div>
    )
}

export default BTNOutput;
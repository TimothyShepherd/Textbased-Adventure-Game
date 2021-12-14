import React, {useEffect} from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Info from '../Components/characterInfo.js';

export function Inv()  {
    const navigate = useNavigate();
    const player = useSelector(state => state.player)
    const dispatch = useDispatch();

    const Back = ()=>{
        
        if(player.currentTile=="Shop"){
            navigate("/Shop")
        }
        if(player.currentTile=="enemy"){
            navigate("/test_fight")
        }
        if(player.currentTile=="event"){
            dispatch({ type: 'setTile', payload: "general" })
            dispatch({ type: 'tile', payload: "general" })
            navigate("/map_manage")
        }
        if(player.currentTile=="general"){
            navigate("/map_manage")
        }

    }

    return (
        <div>
            {/* This set of buttons change conditions and send you to fight "Auto redirection based on conditions" */}
            <Info/>
            <button className="btn btn-danger" onClick={Back} style={{
                fontSize: "30px",
                margin: "25px",
                fontFamily: "revert",
                fontWeight: "bold",
                textShadow: "2px 1px 2px black",
                borderColor: "black"
            }}>Continue Journey</button>
        </div>
    )
}


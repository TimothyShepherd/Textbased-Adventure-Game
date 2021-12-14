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
            <h2 className="App-header">This set of buttons change conditions and send you to fight "Auto redirection based on conditions"</h2>
            <Info/>
            <input type="button" value="Go Back" onClick={Back} />
        </div>
    )
}


import {React,useEffect} from 'react';


import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

export function Records()  {
    const navigate = useNavigate();
    const state = useSelector(state => state)
    const player = state.player;
    const dispatch = useDispatch();
    useEffect(() => {
        // Update the document title using the browser API
        let t = player.currentTile;
        if (t != "records") {
            dispatch({ type: 'tile', payload: t })
            navigate('/map_manage');
        }   
    }, []);
    


    return (
        <div>
            <h1 className="App-header">You Win! Reload to restart."</h1>
            <h2>Score: {player.hp+state.gold}</h2>

        </div>
    )
}


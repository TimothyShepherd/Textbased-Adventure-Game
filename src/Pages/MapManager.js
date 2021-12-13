import { React, useEffect } from 'react';

import Buttonks from '../Components/buttonsStore';
import Options2 from '../Components/moreOptions';
import BTNOutput from '../Components/Output/Output';
import BInfo from '../Components/Output/BasicInfo';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import MovementB from '../Components/MovementOptions';

export function MapManage() {
    const navigate = useNavigate();
    const state = useSelector(state => state);
    const player = state.player;
    const dispatch = useDispatch();
    const tile = state.tiles[player.x][player.y];
    useEffect(() => {
        // Update the document title using the browser API
        let t = tile;
        if (t == "enemy") {
            
            let enemy = state.tiles[player.x]["name"];
            dispatch({ type: 'setEnemy', payload: enemy })
            dispatch({ type: 'tile', payload: t })
            navigate('/test_fight');
        }
        if (t == "shop") {
            
            dispatch({ type: 'tile', payload: t })
            navigate('/shop');
        }
        if (t == "event") {
            
            dispatch({ type: 'tile', payload: t })
            navigate('/event');
        }
        console.log("parent useEffect")
    }, [player.x]);



    function Invent() {
        navigate("/inventory")
    }

    return (
        <div>

            <BInfo />
            <h1>{state.tiles[player.x][player.y]}</h1>
            <MovementB />
            <input type="button" value="Go to Inventory" onClick={Invent} />
        </div>
    )
}


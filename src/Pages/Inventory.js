import {React,useEffect} from 'react';


import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Info from '../Components/characterInfo.js';

export function Inv()  {
    const navigate = useNavigate();
    const player = useSelector(state => state.player)

    const redirectFight = ()=>{
        navigate("/test_fight")
    }

    const redirectShop = ()=>{
        if(player.currentTile=="Shop"){
        navigate("/Shop")
        }
    }

    return (
        <div>
            <h2 className="App-header">This set of buttons change conditions and send you to fight "Auto redirection based on conditions"</h2>
                <input type="button" value="redirect to fight -if- its present" onClick={redirectFight}/>
                <input type="button" value="redirect to Shop -if- its present" onClick={redirectShop}/>
            <Info/>
        </div>
    )
}


import {React,useEffect} from 'react';

import Buttonks from './buttonsStore';
import Options2 from './moreOptions';
import BTNOutput from './TypeScript Start/Output';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

export function Par()  {
    const navigate = useNavigate();
    const player = useSelector(state => state.player)
    const dispatch = useDispatch();

    useEffect(() => {
        // Update the document title using the browser API
        if(player.currentTile=="enemy"){
        navigate('/test_fight');
        }
        console.log("parent useEffect")
      },[player.currentTile]);

    const redirect=()=>{
        dispatch({ type: 'tile', payload: "enemy" })
    }

    function setEnemy(e){
        dispatch({ type: 'setEnemy', payload: e.target.value })
        dispatch({ type: 'tile', payload: "enemy" })
    }

    return (
        <div>
            
            <h2 className="App-header">This set of buttons change conditions and send you to fight "Auto redirection based on conditions"</h2>
                <input type="button" value="redirect to fight -if- its present" onClick={redirect}/>
                <input type="button" value="Jester" onClick={setEnemy}/>
                <input type="button" value="Bucaneer" onClick={setEnemy}/>
                <input type="button" value="First_Mate" onClick={setEnemy}/>
                <input type="button" value="Pirate_lord" onClick={setEnemy}/>
            <h2 className="App-header">This is a set of buttons that make an example of how to acquire and modify player variables
                BTNOutput has the way of acquiring data
                Buttonks has the way of modifying data
                
            </h2>
            <BTNOutput/>
            <Buttonks/>
            <h2 className="App-header">The following allows access and printing of crucial stats for the weapons. Allows for weapon switching
                and displays the skills each item allows, as well as the multiplier each one has.

            </h2>
            <Options2/>
        </div>
    )
}


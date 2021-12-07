import {React,useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export function MockFight(props)  {
    console.log("Mock Fight Rendered")
    const state = useSelector(state=>state)
    const player = state.player;
    const enemy = state.enemies.current;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = state.items;
    const abilities = state.abilities;
    useEffect(() => {
        // Update the document title using the browser API
        if(player.currentTile=="none"){
        navigate('/test_data');
        }
      },[player]);

    const mapExit = ()=>{
        dispatch({ type: 'tile', payload: "none" })
    }
    const hpInc=()=>{
        dispatch({ type: 'hpInc', payload: 15 })
    }

    const hpDec=()=>{
        dispatch({ type: 'hpDec', payload: 20 })
    }

    const action=(e)=>{
        //as String
        let current = e.target.value
        let att = items[player.currentWeapon].att
        let attMul = abilities[current].attMul 
        let damage = attMul*att
        let newhp = ((enemy.hp-damage)).toFixed()
        let newxp = enemy.xp
        if(newhp<=0){
            newhp = 0
            dispatch({ type: 'addXp', payload: enemy.xp })
            newxp = 0;      
        }
        let newenemy=({...enemy,hp:newhp,xp:newxp})
        dispatch({ type: 'dmgEnemy', payload: newenemy })

    }

    return (
        <div>
            <div className="enemy">
                Enemy data 
                <ol>
                <li>{enemy.name}</li>
                <li>hp:{enemy.hp}</li>
                <li>weapon:{enemy.weapon}</li>
            </ol>
            </div>
            <div className="player">
            Player data
            <ol>
                <li>hp:{player.hp}</li>
                <li>weapon:{player.currentWeapon}</li>
            </ol>
            </div>
            <button onClick={hpInc} className="btn btn-primary"> Raise hp by 10</button>
            <button onClick={hpDec} className="btn btn-danger"> Remove hp by 20</button><br /><br />
            <h2>List weapon abilities: </h2><ol>
                {items[player.currentWeapon].skills.map((c) => <li key={c}>{"\t"+c+":"+Object.keys(abilities[c]).map((multiplier) =>  "\t" + multiplier + ": " + abilities[c][multiplier])}
                &nbsp;<input type="button" value={c} onClick={action} /></li>
                
                )
                    
                } 

            </ol>

            <input type="button" value="Exit to Map" onClick={mapExit}/>
        </div>
    )
}


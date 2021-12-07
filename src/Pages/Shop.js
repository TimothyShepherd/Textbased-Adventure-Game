import {React,useState} from 'react';

import Options2 from '../Components/moreOptions.js';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

export function Shop()  {
    
    const navigate = useNavigate();
    const state = useSelector(state => state)
    const player = state.player;
    const itemsState = state.items;
    const [item, setItems] = useState({...itemsState,sword:{...itemsState.sword,random:(Math.floor(Math.random() * (41 - 20) + 20))},
                                                    axe:{...itemsState.axe,random:(Math.floor(Math.random() * (41 - 20) + 20))},
                                                    knife:{...itemsState.knife,random:(Math.floor(Math.random() * (41 - 20) + 20))},
                                                    boxing_gloves:{...itemsState.boxing_gloves,random:(Math.floor(Math.random() * (41 - 20) + 20))}});
    if(typeof(item.fists)!="undefined"){
        let it = item;
        delete it.fists
        setItems(it)
    }

    const dispatch = useDispatch();
    const redirect = ()=>{
        navigate("/inventory")
    }
    console.log(item)

    const hpInc=()=>{
        //15 is base for heal while sleeping
        dispatch({ type: 'hpInc', payload: 30 })
        dispatch({ type: 'removeGold', payload: 10 })
    }
    const getRandomArbitrary=()=> {
        let max = 41;
        let min = 15;
        console.log(max)
        console.log(min)
        let rand = (Math.floor(Math.random() * (max - min) + min));
        console.log("rand:" + rand)
        
      }

    const removeGold=(e)=>{
        let value = e.target.innerHTML
        console.log(value)
        dispatch({ type: 'removeGold', payload: value })
    }
    //Stores should be accessible only once. 
    //Stores should generate numbers between 1 and 4 (items available to buy)
    //Should randomly discard n - previous number items available to buy
    //Should generate a range of values to buy an item. 
    return (
        <div>
            <h2 className="App-header">This set of buttons regarding the shop, which mean you buy and sell stuff</h2>
            <h2>Current hp: {player.hp}</h2>
            <h2>Current gold: {state.gold}</h2>
            
                <input type="button" value="redirect to inventory" onClick={redirect}/><br/>
                <input type="button" value="Hire someone to guard you on your sleep. (30 hp for 10 Gold)" onClick={hpInc}/>
                <h2>Buy an item for the right price!</h2>
                <ol>{Object.keys(item).map((key)=><li>{key}:<button onClick={removeGold} >{item[key].random}</button></li>)}</ol>
        </div>
    )
}


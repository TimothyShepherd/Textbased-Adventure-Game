import {React,useState} from 'react';

import Options2 from '../Components/moreOptions.js';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

export function Shop()  {
    
    const navigate = useNavigate();
    const state = useSelector(state => state)
    const player = state.player;
    const itemsState = state.items;
    const potions = state.potions
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
   // console.log(item)

    const hpInc=()=>{
        
       //Order matters: Guard Operator
        if(player.hp<100&&removeGold(10)){
            dispatch({ type: 'hpInc', payload: 30 })
        }
        
    }


    function removeGold(value){
        if(value >state.gold){
            document.getElementById("goldAlert").innerHTML="NOT ENOUGH GOLD!"
        return false;
        }
        else{
            dispatch({ type: 'removeGold', payload: value })
        document.getElementById("goldAlert").innerHTML="THANKS FOR YOUR PURCHASE!"
        return true;
    }
    }
    const buyItem=(e)=>{
        
        let value = e.target.innerHTML
        
        if(removeGold(value)){
           payloadAdd(e.target.name)
            
        }
    }

    const buyPotion=(e)=>{
        
        let value = e.target.innerHTML
        let name = e.target.name
        if(removeGold(value)){
            dispatch({ type: 'addPotion', payload: name, quantity:1 })
          
            
        }
    }

     //Inventory
     const payloadAdd = (e) => {
        let x = e
        dispatch({ type: 'addItem', payload: x })
    }
    //Stores should be accessible only once. 
    //Stores should generate numbers between 1 and 4 (items available to buy)
    //Should randomly discard n - previous number items available to buy
    //Should generate a range of values to buy an item. 
    return (
        <div>
            <h2 className="App-header">WELCOME TO THE SHOP</h2>
            <h2>Current hp: {player.hp}</h2>
            <h2>Current gold: {state.gold}</h2>
            
                <input type="button" value="redirect to inventory" onClick={redirect}/><br/>
                <input type="button" value="Hire someone to guard you on your sleep. (30 hp for 10 Gold)" onClick={hpInc}/>
                <h2>Buy an item for the right price!</h2>
                <ol>{Object.keys(item).map((key)=><li>{key}: <span></span> <button onClick={buyItem} name={key}>{item[key].random}</button></li>)}</ol>
                <h2>Maybe a healing potion instead?!</h2>
                <ol>{Object.keys(potions).map((key)=><li>{key}: <span></span> <button onClick={buyPotion} name={key}>{potions[key]}</button></li>)}</ol>
            
                <h3 id="goldAlert">Buy something!!</h3>
        </div>
    )
}


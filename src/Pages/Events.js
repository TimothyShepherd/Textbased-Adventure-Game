import React, {useEffect} from 'react';


import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


export function Evt()  {
    const navigate = useNavigate();
    const state = useSelector(state => state)
    //const random = 2;
    const random = state.random;
    var event = state.events[random];
    
    const dispatch = useDispatch();
    useEffect(() => {
        // Update the document title using the browser API
        var min = 1
        var max = Object.keys(state.events).length+1
        var random = Math.floor(Math.random() * (max - min) + min)
        event = state.events[random];
        dispatch({type:"setRandom",payload:random})
        console.log(event.effects)
        Object.keys(event.effects).map((e)=>
        dispatch({type:event.effects[e].type,payload:event.effects[e].value})
        )
        
      },[]);


    const next = ()=>{
        navigate("/test_fight")
    }


    return (
        <div>
            <h2 className="App-header" style={{fontSize: "50px", margin: "40px", fontWeight: "bold"}}>An Event Has Ocurred:</h2>
            <div className="container">
            <h3>{event.title}</h3>
            </div>
                <button className="btn btn-light" onClick={next} style={{fontSize: "30px", margin: "40px"}}>Continue</button>
        </div>
    )
}


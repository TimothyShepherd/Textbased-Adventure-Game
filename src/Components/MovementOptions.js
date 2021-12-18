import React from "react";
import { useDispatch,useSelector } from "react-redux";

//Define a component that will use dispatcher
//Note we require an import
const MovementB = () => {
    const player = useSelector(state => state.player)
    //Dispatch actually SENDS AN OBJECT
    //TYPE is a KEY with : 'VALUE'
    //You can put as much data as you like.
    const dispatch = useDispatch();
    //increase and decrease gold
    const inc = () => {
        dispatch({ type: 'increment' })
    }
    const dec = () => {
        dispatch({ type: 'decrement' })
    }

    //Player movement
    //According to specifications: 0<=x=<7
    //According to specifications: 0<=y=<1
    const moveY = () => {
        if(player.x<7){
        dispatch({ type: 'advanceX' })
        }
        if(player.y<1){
        dispatch({ type: 'advanceY' })
        }
    }

    const backY = () => {
        if(player.x<7){
        dispatch({ type: 'advanceX' })
        }
        if(player.y>0){
        dispatch({ type: 'retreatY' })
        }
    }

    //Inventory
    const payloadAdd = (e) => {
        let x = e.target.value
        
        dispatch({ type: 'addItem', payload: x })
    }
    //This function is suddenly working WITH input, usually it... failed
    const payloadRemove = (e) => {
        let x = e.target.value
        dispatch({ type: 'removeItem', payload: x })
    }

    //Current held item


    //Add XP by value
    //Hard to pass down values, but can be done with ID, if you set parameter this BREAKS
    const xpAdd = () => {
        let x = parseInt(document.getElementById(54).value)
        dispatch({ type: 'addXp', payload: x })
    }

    //HP management functions
    const hpInc=()=>{
        dispatch({ type: 'hpInc', payload: 15 })
    }

    const hpDec=()=>{
        dispatch({ type: 'hpDec', payload: 20 })
    }

    return (
        <div className="printing">
            <button onClick={backY} className="btn btn-info" style={{
                fontSize: "35px",
                fontFamily: "revert",
                fontWeight: "bold",
                margin: "15px",
                textShadow: "2px 1px 2px white",
                borderColor: "black"
        }}>Move Up</button>
            <button onClick={moveY} className="btn btn-info" style={{
                fontSize: "35px",
                fontFamily: "revert",
                fontWeight: "bold",
                textShadow: "2px 1px 2px white",
                borderColor: "black"
                }}>Move Down</button><br /><br />
            
        </div>
    )

}

export default MovementB;
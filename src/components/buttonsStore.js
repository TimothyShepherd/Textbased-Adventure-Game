import React from "react";
import { useDispatch } from "react-redux";

//Define a component that will use dispatcher
//Note we require an import
const Buttonks = () => {
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
    const moveX = () => {
        dispatch({ type: 'advanceX' })
    }

    const moveY = () => {
        dispatch({ type: 'advanceY' })
    }

    const backX = () => {
        dispatch({ type: 'retreatX' })
    }

    const backY = () => {
        dispatch({ type: 'retreatY' })
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
            <button onClick={hpInc} className="btn btn-primary"> Raise hp by 10</button>
            <button onClick={hpDec} className="btn btn-danger"> Remove hp by 20</button><br /><br />
            <button onClick={inc} className="btn btn-primary"> Crease</button>
            <button onClick={dec} className="btn btn-danger"> Decrease</button><br /><br />
            <button onClick={moveX} className="btn btn-primary"> Move X</button>
            <button onClick={moveY} className="btn btn-primary"> Move Y</button><br /><br />
            <button onClick={backX} className="btn btn-danger"> Back X</button>
            <button onClick={backY} className="btn btn-danger"> Back Y</button><br /><br />
            <button onClick={payloadAdd} value ="axe" className="btn btn-secondary"> Add Axes</button>
            <button onClick={payloadRemove} value ="axe" className="btn btn-danger"> Remove Axes</button><br /><br />
            <button onClick={payloadAdd} value ="sword" className="btn btn-secondary"> Add sword</button>
            <button onClick={payloadRemove} value ="sword" className="btn btn-danger"> Remove sword</button><br /><br />
            <button onClick={payloadAdd} value ="boxing_gloves" className="btn btn-secondary"> Add boxing gloves</button>
            <button onClick={payloadRemove} value ="boxing_gloves" className="btn btn-danger"> Remove boxing gloves</button><br /><br />
            <button onClick={payloadAdd} value ="knife" className="btn btn-secondary"> Add knifes</button>
            <button onClick={payloadRemove} value ="knife" className="btn btn-danger"> Remove knifes</button><br /><br />
            <button onClick={xpAdd} id="54" value={15} className="btn btn-primary"> Add 15 xp</button><br /><br />
        </div>
    )

}

export default Buttonks;
import React from "react";
import { useDispatch } from "react-redux";

//Define a component that will use dispatcher
//Note we require an import
const Buttonks = () =>{
    //Dispatch actually SENDS AN OBJECT
    //TYPE is a KEY with : 'VALUE'
    //You can put as much data as you like.
const dispatch = useDispatch();
//increase and decrease gold
const inc =()=>{
    dispatch({type: 'increment'})
}
const dec =()=>{
    dispatch({type: 'decrement'})
}

//Player movement
const moveX =()=>{
    dispatch({type: 'advanceX'})
}

const moveY =()=>{
    dispatch({type: 'advanceY'})
}

const backX =()=>{
    dispatch({type: 'retreatX'})
}

const backY =()=>{
    dispatch({type: 'retreatY'})
}

const payloadAdd =()=>{
    dispatch({type: 'addItem',payload:"axe"})
}

const payloadRemove =()=>{
    dispatch({type: 'removeItem',payload:"axe"})
}

//Inventory

return(
    <div>
        <button onClick={inc} className="btn btn-primary"> Crease</button>
        <button onClick={dec} className="btn btn-danger"> Decrease</button><br/><br/>
        <button onClick={moveX} className="btn btn-primary"> Move X</button>
        <button onClick={moveY} className="btn btn-primary"> Move Y</button><br/><br/>
        <button onClick={backX} className="btn btn-danger"> Back X</button>
        <button onClick={backY} className="btn btn-danger"> Back Y</button><br/><br/>
        <button onClick={payloadAdd} className="btn btn-danger"> Add Axes</button>
        <button onClick={payloadRemove} className="btn btn-danger"> Remove Axes</button>
    </div>
)

}

export default Buttonks;
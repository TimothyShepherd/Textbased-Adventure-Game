import {React,useEffect} from 'react';


import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Info from '../Components/characterInfo.js';

export function Evt()  {
    const navigate = useNavigate();
    const state = useSelector(state => state)

    const next = ()=>{
        navigate("/test_fight")
    }


    return (
        <div>
            <h2 className="App-header">An Event has ocurred</h2>
                <input type="button" value="Continue" onClick={next}/>
        </div>
    )
}


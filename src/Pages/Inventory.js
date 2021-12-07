import {React,useEffect} from 'react';

import Options2 from '../Components/moreOptions.js';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

export function Inv()  {
    const navigate = useNavigate();
    const player = useSelector(state => state.player)

    const redirect = ()=>{
        navigate("/test_fight")
    }

    return (
        <div>
            <h2 className="App-header">This set of buttons change conditions and send you to fight "Auto redirection based on conditions"</h2>
                <input type="button" value="redirect to fight -if- its present" onClick={redirect}/>

            <Options2/>
        </div>
    )
}


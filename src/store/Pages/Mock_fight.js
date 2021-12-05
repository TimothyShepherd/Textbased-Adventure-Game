
import React from 'react';
import { useDispatch, useSelector } from "react-redux";

export function MockFight(props)  {
    const player = useSelector(state => state.player)
    const enemy = useSelector(state => state.enemies[props.enemy])
    

    return (
        <div>
            <div className="enemy">
                Enemy data 
                <ol>
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
        </div>
    )
}


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export function MockFight(props) {
    console.log("Mock Fight Rendered")
    const state = useSelector(state => state)
    const player = state.player;
    const enemy = state.enemies.current;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = state.items;
    const abilities = state.abilities;
    useEffect(() => {
        // Update the document title using the browser API
        if (player.currentTile == "general") {
            navigate('/map_manage');
        }
        if (player.currentTile == "event") {
            dispatch({ type: 'setTile', payload: "general" })
            dispatch({ type: 'tile', payload: "general" })
            navigate('/map_manage');
        }
        if (player.currentTile == "records") {
            navigate('/records');
        }
        if (player.currentTile == "lose") {
            console.log("active")
            navigate('/lose');
        }
    }, [player]);

    const mapExit = () => {
        dispatch({ type: 'tile', payload: "general" })
    }
    const hpInc = () => {
        dispatch({ type: 'hpInc', payload: 100 })
    }

    const hpDec = () => {
        dispatch({ type: 'hpDec', payload: 20 })
    }

    const action = (e) => {

        //as String
        let current = e.target.value
        let plyrSPD = speed(player.currentWeapon, current)
        let enemySPD = speed(enemy.weapon, items[enemy.weapon].skills[enemy.ability])

        //Returns the new total HP
        let newhp = damageToEnemy(current)
        newhp = parseInt(newhp).toFixed(1)
        let newxp = enemy.xp
        if (newhp <= 0) {
            newhp = 0
            dispatch({ type: 'addXp', payload: enemy.xp })
            dispatch({ type: 'addGold', payload: enemy.gold })
            newxp = 0;
            if (enemy.name == "BlueBeard") {
                dispatch({ type: 'setTile', payload: "records" })
                dispatch({ type: 'tile', payload: "records" })
            }
            else {
                dispatch({ type: 'setTile', payload: "general" })
                dispatch({ type: 'tile', payload: "general" })
            }
        }

        let newenemy = ({ ...enemy, hp: newhp, xp: newxp })

        dispatch({ type: 'dmgEnemy', payload: newenemy })
        dispatch({ type: 'setEnemyMove' });

        let playerDmg = damageToPlayer();

        //Does defense apply? Must be done this exact way, comparing the values directly sometimes causes java to -mess up- 
        //in the following absurd way: "5<4 is true" 
        let difference = (plyrSPD - enemySPD)
        if (difference >= 0) {
            playerDmg = playerDmg - defense(player.currentWeapon, current);
        }
        //least amount of damage
        if (playerDmg < 0) {
            playerDmg = 1;
        }
        if(playerDmg>player.hp){
                dispatch({ type: 'setTile', payload: "lose" })
                dispatch({ type: 'tile', payload: "lose" })
        }

        dispatch({ type: 'hpDec', payload: playerDmg })

    }

    function damageToEnemy(current) {
        let att = items[player.currentWeapon].att
        let attMul = abilities[current].attMul
        let damage = attMul * att

        let plyrSPD = speed(player.currentWeapon, current)
        let enemySPD = speed(enemy.weapon, items[enemy.weapon].skills[enemy.ability])
        if (enemySPD > plyrSPD) {
            damage = damage - defense(enemy.weapon, items[enemy.weapon].skills[enemy.ability])
        }

        if (damage < 0) {
            damage = 2;
        }

        let newhp = ((enemy.hp - damage)).toFixed(1)



        return newhp;
    }

    function damageToPlayer() {
        let att = items[enemy.weapon].att
        let attMul = abilities[items[enemy.weapon].skills[enemy.ability]].attMul
        let damage = attMul * att
        return (damage).toFixed(1);
    }

    //weapon name
    //ability name
    function damage(weapon, ability) {
        let att = items[weapon].att
        let mul = abilities[ability].attMul
        return (att * mul).toFixed(1)
    }

    function defense(weapon, ability) {
        let def = items[weapon].def
        let mul = abilities[ability].defMul
        return (def * mul).toFixed(1)
    }

    function speed(weapon, ability) {
        return (items[weapon].spd * abilities[ability].spd).toFixed(1)
    }

    function Invent() {
        navigate("/inventory")
    }

    return (
        <div>
            <div className="enemy">
                <ol>
                    <li>Enemy data </li>

                    <li>{enemy.name}</li>
                    <li>hp:{enemy.hp}</li>
                    <li>weapon:{enemy.weapon}</li>
                    <b> <li>Move:{items[enemy.weapon].skills[enemy.ability]}</li></b>
                    <b> <li>Incoming damage:{damageToPlayer()}</li></b>
                    <b> <li>Defending for:{defense(enemy.weapon, items[enemy.weapon].skills[enemy.ability])}</li></b>
                    <b> <li>At speed:{speed(enemy.weapon, items[enemy.weapon].skills[enemy.ability])}</li></b>
                </ol>
            </div>
            <div className="player">
                <ol>
                    <li>Player data </li>

                    <li>hp:{player.hp}</li>
                    <li>weapon:{player.currentWeapon}</li>
                </ol>
            </div>
            <h2>List weapon abilities: </h2><ol>
                Ability values
                {items[player.currentWeapon].skills.map((c) => <li key={c}>{"\t" + c + ":" + "damage: " + damage(player.currentWeapon, c) + ", defend: " + defense(player.currentWeapon, c) + ", speed: " + speed(player.currentWeapon, c)}
                    &nbsp;<input type="button" value={c} onClick={action} /></li>

                )

                }


            </ol>

            <input type="button" value="Go to Inventory" onClick={Invent} />
        </div>
    )
}


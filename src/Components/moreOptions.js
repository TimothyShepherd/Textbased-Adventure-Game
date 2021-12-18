import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './style.css'

//Define a component that will use dispatcher
//Note we require an import
const Options2 = () => {
    const items = useSelector(state => state.items)
    const player = useSelector(state => state.player)
    const abilities = useSelector(state => state.abilities)
    const currentWeapon = useSelector(state => state.player.currentWeapon)
    const enemies = useSelector(state =>state.enemies)
    const inventory = player.inventory

    //Dispatch actually SENDS AN OBJECT
    //TYPE is a KEY with : 'VALUE'
    //You can put as much data as you like.
    const dispatch = useDispatch();
    //increase and decrease gold

    //Add XP by value
    const weaponSelect = (e) => {
        //let x = document.getElementById("weapon")
        let x = e.target.value
        dispatch({ type: 'weaponSelect', payload: x })
    }

    return (
        <div >
            <h1>Equipped: {player.currentWeapon}</h1>
            <select onChange={weaponSelect} value={currentWeapon} id="weapon">
                {
                    Object.keys(inventory).map((weapon) =>
                        <option key={weapon} value={weapon}>{weapon}</option>
                    )}
            </select>
            <h2>Stats: </h2>{
                Object.keys(items[currentWeapon]).map((key) =>
                    <text key={key}>{key}: {items[currentWeapon][key]}</text>
                )}
            

            <h2>Abilities: </h2>
                {items[currentWeapon].skills.map((c) => <li key={c}>{"\t"+c+":"+Object.keys(abilities[c]).map((multiplier) => "\t" + multiplier + ": " + abilities[c][multiplier])}</li>
                )
                    //my.map((c)=>console.log(Object.keys(abilities[c]).map((multiplier)=>console.log(multiplier+": "+abilities[c][multiplier]))))
                }

           

            <h2>List enemies: </h2>
                {Object.keys(enemies).map((key)=><li key={key}>{enemies[key].name+"\thp: "+enemies[key].hp+"\t weapon: "+enemies[key].weapon+"\t xp granted: "+enemies[key].xp}</li>)}
            
                

    

        </div>
    )

}

export default Options2;
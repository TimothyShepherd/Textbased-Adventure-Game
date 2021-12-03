import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Define a component that will use dispatcher
//Note we require an import
const Options2 = () => {
    const items = useSelector(state => state.items)
    const player = useSelector(state => state.player)
    const abilities = useSelector(state => state.abilities)
    const currentWeapon = useSelector(state => state.player.currentWeapon)
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
            <h1>Your current weapon is: {player.currentWeapon}</h1>
            <select onChange={weaponSelect} id="weapon">
                {
                    Object.keys(inventory).map((weapon) =>
                        <option key={weapon} value={weapon}>{weapon}</option>
                    )}
            </select>
            <h2>Current weapon stats: </h2><ol>{
                Object.keys(items[currentWeapon]).map((key) =>
                    <li key={key}>{key}: {items[currentWeapon][key]}</li>
                )}
            </ol>

            <h2>List weapon abilities: </h2><ol>
                {items[currentWeapon].skills.map((c) => <li key={c}>{"\t"+c+":"+Object.keys(abilities[c]).map((multiplier) => "\t" + multiplier + ": " + abilities[c][multiplier])}</li>
                )
                    //my.map((c)=>console.log(Object.keys(abilities[c]).map((multiplier)=>console.log(multiplier+": "+abilities[c][multiplier]))))
                }

            </ol>
        </div>
    )

}

export default Options2;
import { useDispatch, useSelector } from "react-redux";
import BTNOutput from './TypeScript Start/Output';

//Define a component that will use dispatcher
//Note we require an import
const Info = () => {
    const state = useSelector(state => state);
    const                          items = state.items;
    
    const player = state.player;
    const abilities = state.abilities;
    const currentWeapon = state.player.currentWeapon;
    const currentWeaponStats = {...items[currentWeapon],skills: items[currentWeapon].skills.length}
    const inventory = player.inventory;
    const potions = state.potions;

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

    const usePotion=(e)=>{
        
        
        let name = e.target.name
        if(player.potions[name]>0){
        dispatch({ type: 'hpInc', payload: potions[name] })
        dispatch({ type: 'removePotion', payload: name, quantity:1 })
        }
            
        
    }

    return (
        <div >
             <h1>
                Hp: {player.hp}
            </h1>
            
            
            
                Gold earned: {state.gold}
            
            <br/>
                         Current Level: {player.xp.level}
            
            <br/>
            
                Current amount of XP (leves on 100): {player.xp.number}
            
            <h1>Your current weapon is: {player.currentWeapon}</h1>
            <select onChange={weaponSelect} value={currentWeapon} id="weapon">
                {
                    Object.keys(inventory).map((weapon) =>
                        <option key={weapon} value={weapon}>{weapon}</option>
                    )}
            </select>
            <h2>Current weapon stats: </h2><ol>{
                Object.keys(currentWeaponStats).map((key) =>
                    <li key={key}>{key}: {currentWeaponStats[key]}</li>
                )}
            </ol>

            <h2>List weapon abilities: </h2><ol>
                {items[currentWeapon].skills.map((c) => <li key={c}>{"\t"+c+":"+Object.keys(abilities[c]).map((multiplier) => "\t" + multiplier + ": " + abilities[c][multiplier])}</li>
                )
                    //my.map((c)=>console.log(Object.keys(abilities[c]).map((multiplier)=>console.log(multiplier+": "+abilities[c][multiplier]))))
                }

            </ol>
                <h2>Current Potions:</h2>
                <div><ol>{Object.keys(player.potions).map((key)=><li>{key}:{player.potions[key]}<button name = {key} onClick={usePotion}>USE</button></li>)}</ol></div>
                

        </div>
    )

}

export default Info;
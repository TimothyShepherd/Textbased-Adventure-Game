import { createStore } from "redux";

//Initialize the STATE/STORE
const initialState = {
    gold: 0,
    player: {
        currentTile:"general",
        hp:100,
        x: 0,
        y: 0,
        currentWeapon: "fists",
        inventory: {
            //These can't be sold
            fists: 2,
        },
        xp: {
            level: 1,
            //Level up on 100
            number: 0
        }
    },
    items: {
        fists: { att: 5, def: 5, spd: 20, 
            skills:["punch","jab","defend"]},
        sword: { att: 10, def: 12, spd: 10, 
            skills:["stab","slice","parry","defend"]},
        axe: {
            att: 15, def: 5, spd: 8,
            skills:["strike","slice","smash","defend"]
        },
        boxing_gloves: { att: 6, def: 8, spd: 20 ,
            skills:["punch","jab","strike","defend"]
        },
        knife: { att: 8, def: 3, spd: 20 ,
            skills:["stab","slice","defend"]
        }
    },
    abilities: {
        //axe
        strike: { attMul: 1.3, defMul: .8, spd: 1 },
        smash: { attMul: 1.5, defMul: .5, spd: .8 },
        //sword and knife
        stab: { attMul: 2, defMul: 0, spd: 1.5 },
        slice: { attMul: 1, defMul: 1, spd: 2 },
        parry: { attMul: .2, defMul: 1.5, spd: 20 },
        //all
        defend: { attMul: 0, defMul: 2, spd: 10 },

        //Acquired through events
        counter: { attMul: 1, defMul: 1.5, spd: 2 },

        //Fist and boxing_gloves
        punch: { attMul: .5, defMul: 1, spd: 1 },
        jab: { attMul: .3, defMul: 1.2, spd: 1.5 },
        overhead: { attMul: 2, defMul: .6, spd: .5 }
    },
    //On defeat, drop weapon and 
    enemies:{
        Jester:{
            name:"Jest",
            hp:50,
            weapon:"fists",
            xp:50
        },
        Bucaneer:{
            name:"Javaneer",
            hp:75,
            weapon:"knife",
            xp:60
        },
        First_Mate:{
            name:"First M8",
            hp:80,
            weapon:"boxing_gloves",
            xp:80
        },
        Pirate_lord:{
            name:"BlueBeard",
            hp:100,
            weapon:"sword",
            xp:0
        },
        current:{
            name:"Jest",
            hp:50,
            weapon:"fists",
            xp:50
    }
    }
    

}

//"reducer function"
//This manages the data modifiers, only receiving the ACTION from the components
const counterModify = (state = initialState, action) => {
    //Check the action type to know what function to change
    //General

    if (action.type === "increment") {
        return { ...state, gold: state.gold + 1 };
    }
    if (action.type === "decrement") {
        return { ...state, gold: state.gold - 1 };
    }

    //Player Movement
    if (action.type === "advanceX") {
        let player = { ...state.player, x: (state.player.x + 1) }
        return { ...state, player }
    }

    if (action.type === "advanceY") {
        let player = { ...state.player, y: (state.player.y + 1) }
        return { ...state, player }
    }

    if (action.type === "retreatX") {
        let player = { ...state.player, x: (state.player.x - 1) }
        return { ...state, player }
    }

    if (action.type === "retreatY") {
        let player = { ...state.player, y: (state.player.y - 1) }
        return { ...state, player }
    }



    //inventory
    //Adds item based on name
    if (action.type === "addItem") {
        let current = state.player.inventory[action.payload]||0
        let inventory = { ...state.player.inventory, [action.payload]: current + 1 }
        let player = { ...state.player, inventory }
        
        return { ...state, player }
    }
    //Removes item based on name, minimum of zero
    if (action.type === "removeItem") {
        let current = state.player.inventory[action.payload]
        if (current > 1) {
            let inventory = { ...state.player.inventory, [action.payload]: current - 1 }
            let player = { ...state.player, inventory }
            
            return { ...state, player }
        }
        else{
            
            let inventory = { ...state.player.inventory}
            delete inventory[action.payload]
            let player = { ...state.player, inventory }
            if(player.currentWeapon==action.payload){
                player = { ...player,currentWeapon:"fists"}
            }
            
            return { ...state, player }
        }
        
    }

    //Adds item based on name
    if (action.type === "addXp") {

        let xp = state.player.xp
        xp.number += action.payload
        if (xp.number >= 100) {
            xp = {
                level: (xp.level += 1),
                number: (xp.number - 100)
            }
        }
        else {
            xp = {
                level: xp.level,
                number: (xp.number)
            }

        }
        let player = { ...state.player, xp }
        return { ...state, player }
    }

    //Current weapon
    if (action.type === "weaponSelect") {

        let player = { ...state.player, currentWeapon: (action.payload) }
        return { ...state, player }
    }

    //hp methods
    //raise hp
    if (action.type === "hpInc") {
        let value = state.player.hp + action.payload
        if(value>100){value = 100}
        let player = { ...state.player, hp: value }
        return { ...state, player }
    }
    if (action.type === "hpDec") {
        let value = state.player.hp - action.payload
        if(value<0){value = 0}
        let player = { ...state.player, hp: value }
        return { ...state, player }
    }

    if (action.type === "tile") {
        let value = action.payload
        let player = { ...state.player, currentTile: value }
        return { ...state, player }
    }

    if(action.type === "dmgEnemy"){
        let value = action.payload
        let enemies = {...state.enemies,current:value}
        return {...state,enemies}
    }

    if(action.type ==="setEnemy"){
        let value = state.enemies[action.payload];
        let enemies = {...state.enemies, current:value}
        return {...state,enemies}

    }

    return state;
}

//Create a store for the data, which is intrinsically related to the reducer, which inherits a state from the initial state
const store = createStore(counterModify);
export default store;
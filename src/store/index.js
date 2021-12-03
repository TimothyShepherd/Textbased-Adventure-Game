import { createStore } from "redux";

//Initialize the STATE/STORE
const initialState={
    gold:0,
    player: {
                x:0,
                y:0,
                inventory:{
                            sword:0,
                            axe:0,
                            punching_gloves:0,
                            knife:0
                          }
            },
    items: {
        sword:{att:10,def:12,spd:10},
        axe:{att:15,def:5,spd:11},
        punching_gloves:{att:6,def:8,spd:20},
        knife:{att:8,def:3,spd:20}
           }

};

//"reducer function"
//This manages the data modifiers, only receiving the ACTION from the components
const counterModify = (state = initialState,action)=>{
    //Check the action type to know what function to change
    //General
    
    if(action.type ==="increment"){
        return{...state,gold: state.gold +1};
    }
    if(action.type ==="decrement"){
        return{...state,gold: state.gold -1};
    }

    //Player Movement
    if(action.type ==="advanceX"){
        let player = {...state.player,x:(state.player.x +1)}    
        return{...state,player}
    }

    if(action.type ==="advanceY"){
        let player = {...state.player,y:(state.player.y +1)}    
        return{...state,player}
    }

    if(action.type ==="retreatX"){
        let player = {...state.player,x:(state.player.x -1)}    
        return{...state,player}
    }

    if(action.type ==="retreatY"){
        let player = {...state.player,y:(state.player.y -1)}    
        return{...state,player}
    }

    //inventory
    //Adds item based on name
    if(action.type ==="addItem"){
        let current = state.player.inventory[action.payload]
        let inventory = {...state.player.inventory,[action.payload]:current+1}
        let player = {...state.player, inventory}    
        return{...state,player}
    }
    //Removes item based on name
    if(action.type ==="removeItem"){
        let current = state.player.inventory[action.payload]
        if(current>0){
        let inventory = {...state.player.inventory,[action.payload]:current-1}
        let player = {...state.player, inventory}    
        return{...state,player}
        }
        
    }

    return state;
}

//Create a store for the data, which is intrinsically related to the reducer, which inherits a state from the initial state
const store = createStore(counterModify);
export default store;
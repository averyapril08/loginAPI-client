import {ADD_LOG,GET_LOG} from '../actions/types';
const initailState=[]
    


export default function(state=initailState,action){
    switch (action.type){
        case GET_LOG:
        return[
            ...state,
            ...action.payload
        ]

        case ADD_LOG :
        return[
            action.payload,...state
        ]

        default:
        return state;

        
    }
}
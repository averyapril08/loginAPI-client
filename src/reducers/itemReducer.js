import {ADD_ITEM,GET_ITEMS,DELETE_ITEMS} from '../actions/types';
const initialState=[];
 


export default function (state=initialState,action){
    switch (action.type){
        case GET_ITEMS :
        return [
            ...state,
            ...action.payload
        ]

        case ADD_ITEM :
        return [
            ...state,action.payload
        ]

        case DELETE_ITEMS :
        return state.filter(item => item._id !== action.payload);

        default:
        return state;
            
        
    }
}
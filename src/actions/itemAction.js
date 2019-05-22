import {ADD_ITEM,GET_ITEMS,DELETE_ITEMS} from './types';
import axios from 'axios';

export const getItems = () => dispatch => {

    axios.get('/api/items')
          .then(res => {
            dispatch({
              type:GET_ITEMS,
              payload:res.data
          })
        }
          )
}

export const addItem = item => dispatch => {
    axios.post('/api/items',item)
        .then(res => dispatch({
            type:ADD_ITEM,
            payload:res.data
        })
        )
        
}

export const delItem = id => dispatch => {
  axios.delete(`/api/items/${id}`)
       .then(res =>{
         
        dispatch({
         type:DELETE_ITEMS,
          payload:id

       })
      })
}

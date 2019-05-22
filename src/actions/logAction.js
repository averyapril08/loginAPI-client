import {ADD_LOG, DELETE_LOG,GET_LOG} from './types';
import axios from 'axios';

export const getLog = () => dispatch => {
    axios.get('/api/log')
         .then(res => dispatch({
             type: GET_LOG,
             payload:res.data
         }))
}

export const addLog= text => dispatch => {
    axios.post('/api/log',text)
         .then(res =>{
             console.log(res.data);
            dispatch({
             type:ADD_LOG,
             payload:res.data
         })})
    
}

export const deleteLog = id => dispatch => {
    axios.post('/api/log/${id}')
         .then(res =>dispatch({
             
         }))
}
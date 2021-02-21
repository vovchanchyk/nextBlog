import *as types from '../types';
import axios from "axios"
import { Dispatch } from 'redux';
import { typeAction } from '../../types/reduserTypes';
import formValues from '../../types/formTypes';
 
export const loginActionCreator =(values:formValues)=> async (dispatch:Dispatch <typeAction> )=> {
    const{name,password}=values
    const res = await axios.get(`http://localhost:4200/users?name=${name}&password=${password}`)
    const[item] = await res.data;
    dispatch({
        type:types.LOG_IN,
        payload: item
    })
}

export const signupActionCreator =(values:formValues)=> async (dispatch:Dispatch <typeAction> )=> {
    debugger
    
    await axios.post('http://localhost:4200/users',values)
    .then(res=>{

        dispatch({
            type:types.SIGN_UP,
            payload: res.data
        })

    })
    
    
}

export const logOutActionCreator =()=>{
     return{  type:types.LOG_OUT} 
}


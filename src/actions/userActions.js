import { LOGIN_FAIL,
     LOGIN_REQUEST,
      LOGIN_SUCCESS,
      CLEAR_ERRORS,
      REGISTER_FAIL,
      REGISTER_REQUEST,
      REGISTER_SUCCESS, 
      LOAD_USERS,
      LOAD_SUCCESS,
    LOGOUT_FAILURE,
LOGOUT_SUCCESS,
LOAD_FAILURE,
UPDATE_PASSWORD_FAILURE,
UPDATE_PASSWORD_SUCCESS,
UPDATE_PASSWORD_LOAD} from "../constants/userContants"
import axios from 'axios'


export const register=(name,email,password)=>
    async(dispatch)=>{
        try{
dispatch({type:REGISTER_REQUEST})
const config={
    header:{
        'Content-Type':'application/json'
    }

}
const {data}=await axios.post('/authlist/register',{name,email,password},config)
dispatch({
    type:REGISTER_SUCCESS,
    payload:data.user
})
        }
        catch(error){
            dispatch({
                type:REGISTER_FAIL,
                payload:error.response.data.message
            })

        }
    }

    //data.user?


    
export const loadUsers=()=>
async(dispatch)=>{
    try{
dispatch({type:LOAD_USERS})

const {data}=await axios.get('/authlist/me')
console.log("load users",data);
dispatch({
type:LOAD_SUCCESS,
payload:data.user
})
    }
    catch(error){
        dispatch({
            type:LOAD_FAILURE,
            payload:error.response.data.message
        })

    }
}



export const login=(email,password)=>
    async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST})
        const config={
            header:{
                'Content-Type':'application/json'
            }
        }
  

const { data } = await axios.post('/authList/login', { email, password }, config)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data.user
            // user is defined in authController ->login -> line 33
        })
    }
    catch(error){
dispatch({
    type:LOGIN_FAIL,
    //doubt 

    payload:error.response.data.message
})
    }
}
export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}


export const logout=()=>
async(dispatch)=>{
    try{


const {data}=await axios.get('/authlist/logout')
console.log("load users",data);
dispatch({
type:LOGOUT_SUCCESS,

})
    }
    catch(error){
        dispatch({
            type:LOGOUT_FAILURE,
            payload:error.response.data.message
        })

    }
}


// Password update & forgot(reset)

export const updatePassword=(password)=>
async(dispatch)=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
dispatch({type:UPDATE_PASSWORD_LOAD})
const {data}=axios.post('/authlist/password/update',{password})
dispatch({
    type:UPDATE_PASSWORD_SUCCESS,
    payload:data.success
})   

}
    catch(error){
        dispatch({
            type:UPDATE_PASSWORD_FAILURE,
            payload:error.response.data.message
        })

    }
}

//login,register,forgot password

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  LOAD_USERS,
  LOAD_FAILURE,
  LOAD_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_LOAD
} from "../constants/userContants";


//logut failure doubt
export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    // user is array , why not object
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case LOAD_USERS:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };

    
   
        case LOAD_FAILURE:
          return{
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
          }

          case LOGOUT_FAILURE:
            return{
              ...state,
              error:action.payload
            }

        case REGISTER_FAIL:
    case LOGIN_FAIL:
   
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }

    default:
      return state;
  }
}

export const userReducer=(state={},action)=>{

  switch(action.type){
case UPDATE_PASSWORD_LOAD:
  return{
    ...state,
    loading:true
  }
  case UPDATE_PASSWORD_SUCCESS:
    return{
      ...state,
      loading:false,
      updateData:action.payload
    }

    case UPDATE_PASSWORD_FAILURE:
    return{
      ...state,
    updatedData:false
    }

    default:
      return state
  }
}
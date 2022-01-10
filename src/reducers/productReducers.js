//contain initial state and action where we pass payload defined in action.js

import { ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_DETAILS_FAIL,
    ALL_PRODUCTS_DETAILS_REQUEST,
    ALL_PRODUCTS_DETAILS_SUCCESS,
CLEAR_ERRORS} 
from '../constants/productConstants'


export const productReducer=(state={products:[]},action)=>{
    switch(action.type){
        case  ALL_PRODUCTS_REQUEST:
        return {
         loading:true,
            products:[]
        }
         case  ALL_PRODUCTS_SUCCESS :
        return {
            loading:false,
            products:action.payload.products, // this is from backend
            productsCount:action.payload.count
        }
         case   ALL_PRODUCTS_FAIL:
        return {
            loading:false,
            error:action.payload
           
        }
        
        case CLEAR_ERRORS:
        return {
            ...state,
            error:null
        }
        default:
        return state;
    }
}
//why product not products and data.paload only
export const productDetailReducer=(state={product:{}},action)=>{
    switch(action.type){
    case ALL_PRODUCTS_DETAILS_REQUEST:
        return{
            ...state,
            loading:true
        }
       case ALL_PRODUCTS_DETAILS_SUCCESS :
return{
loading:false,
product:action.payload
}
case ALL_PRODUCTS_DETAILS_FAIL:
    return {
        ...state,   
        error:null
    }

    case CLEAR_ERRORS:
        return {
            ...state,
            error:null
        }
        default:

            return state;
    }
}
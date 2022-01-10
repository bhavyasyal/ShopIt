import axios from 'axios';


import { ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,    ALL_PRODUCTS_DETAILS_FAIL,
    ALL_PRODUCTS_DETAILS_REQUEST,
    ALL_PRODUCTS_DETAILS_SUCCESS,
CLEAR_ERRORS} 
from '../constants/productConstants'

export const getProducts = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_PRODUCTS_REQUEST })

       const { data } = await axios.get('/productList/products')


       // const { data } = await axios.get('http://127.0.0.1:4000/productList/products')
        console.log(data)  
        
    
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
    
        })
     
    
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductsDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: ALL_PRODUCTS_DETAILS_REQUEST })




const { data } = await axios.get(`/productList/product/${id}`)

     
    
        console.log(data) ;
        
    
        dispatch({
            type: ALL_PRODUCTS_DETAILS_SUCCESS,
            payload: data.product
    //data.product
        })
     
    
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
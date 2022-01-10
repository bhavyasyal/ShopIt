import React, { Fragment,useEffect } from 'react'
import Loader from './layouts/Loader'
import MetaData from './layouts/MetaData'

import {useDispatch,useSelector} from 'react-redux'
import {getProducts} from '../actions/productAction'
import {Product} from './product/Product'

import {useAlert} from 'react-alert';

const Home=() => {

  const dispatch =useDispatch();
  const alert=useAlert();
  const { loading, products, error, productsCount } = useSelector(state => state.products)

  useEffect(()=>{
   if(error){
      
     return  alert.error(error)
   }
dispatch(getProducts());

},[dispatch,error,alert])
  
    return (
 <Fragment>
   {loading? <Loader/>:(
      <Fragment>
         <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
      <div className="row">
   {products && products.map(product=>(
  

<Product key={product._id} product={product}/>

        
   ))}
</div>
            </section>
         </Fragment>
   )}
           
</Fragment>
    )
}

export default Home

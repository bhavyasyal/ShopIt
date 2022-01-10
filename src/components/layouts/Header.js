import React, { Fragment,useState } from "react";
import '../../App.css'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {useAlert}from 'react-alert'
import { logout } from "../../actions/userActions";
const Header=()=>{
  const dispatch = useDispatch();
  const {user,loading}=useSelector(state=>state.auth)

 // !loading ,why is it neccessary?

 const logoutHandler=()=>{
   dispatch(logout());

 }
  const alert=useAlert();   
       
console.log("userInfo on Header",JSON.stringify(user))
  return(
      <Fragment>
  <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <img src="../images/shoptItLogo.png" />
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
      
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count"></span>
                    </Link>
                    

                    <Link to="/me" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3">Me</span>
                        <span className="ml-1" id="cart_count"></span>
                    </Link>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">


                 {user && Object.keys(user).length>0 ? (
             <div className="ml-4 dropdown d-inline">
 <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">


                       
                                <span>{user && user.name}</span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler} >
                                    Logout
                                </Link>

                            </div>


                        </div>

                    ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn"> Login User </Link>}
      </div>
    </nav>
          </Fragment>

    )

}

export default Header;
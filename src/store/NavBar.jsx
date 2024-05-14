import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/authReducer';

const NavBar = () => {

  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin)

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <nav>
        <h1>Redux Counter</h1>
       {
        isLogin && (
          <ul>
            <li>My Records</li>
            <li>Profile</li>
            <li><button onClick={logoutHandler}>logout</button></li>
          </ul>
          
        )
       }
    </nav>
  )
}

export default NavBar
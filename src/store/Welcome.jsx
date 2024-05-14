import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/authReducer';

const Welcome = () => {

  const dispatch = useDispatch();

  const loginHander = () => {
    dispatch(authActions.login())
  }

  return (
        <button className='welcome-btn' onClick={loginHander}>Login to Redux counter</button>
  )
}

export default Welcome
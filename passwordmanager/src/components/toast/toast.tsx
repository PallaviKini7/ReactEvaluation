import React from 'react'
import '../toast/toast.css'

function Toast(props:any) {
  return (
    <div className='success'>
      <div className='alert'>{props.value}</div>
      {/* <img src={require("../../assets/images/close.png")} alt="" className='close'/> */}
      <i className="fa-solid fa-xmark"></i>
      
    </div>
  )
}

export default Toast
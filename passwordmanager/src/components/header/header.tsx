import React from 'react'
import '../header/header.css'

const Header = () => {
  return (
    <div className='square'>
      <div className='head'>
       <img src={require("../../assets/images/pass_logo.png")} alt="" className='pass_logo'/>
       <img src={require("../../assets/images/sync.png")} alt="" className='sync'/>
       <img src={require("../../assets/images/profile.png")} alt="" className='profile'/>
    </div>

    </div>
    
  )
}

export default Header
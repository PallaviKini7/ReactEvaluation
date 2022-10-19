import React from 'react'
import '../sidebar/sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      
       <img src={require("../../assets/images/burger_menu.png")} alt="" className='img'/>
       <img src={require("../../assets/images/home_icn.png")} alt="" className='home_icn'/>
       <div className='highlight'></div>
       
      {/* <div className='sidebox'>
     
      </div>  */}
    </div>
    
  )
}

export default Sidebar
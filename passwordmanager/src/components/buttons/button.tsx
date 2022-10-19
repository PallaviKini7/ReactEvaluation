import React from 'react'
import '../buttons/button.css'

function Button(props:any) {
  return (
    <button className='btn'>{props.value}</button>
  )
}

export default Button
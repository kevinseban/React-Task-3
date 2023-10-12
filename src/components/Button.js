import React from 'react'

function Button(props) {
  return (
    <div>        
      <button onClick={props.onClick} className='btn' style={{backgroundColor : props.color}}>Pick a color</button>
    </div>
  )
}

export default Button
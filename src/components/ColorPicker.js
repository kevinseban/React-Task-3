import React, { useState } from 'react'
import Button from './Button'

function ColorPicker(props) {
  const [selectedColor, setSelectedColor] = useState('green')
  const [showColors, setShowColors] = useState(false)
  
  return (
    <div className='container'>
      {showColors && (<div className='color-list'>
        {props.colors.map((color, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedColor(color);
              setShowColors(!showColors)
            }}
            className='color-option'
            style={{ backgroundColor: color }}>
          </div>
        ))}
      </div>)}
      <Button onClick={() => setShowColors(!showColors)} color={selectedColor} />
    </div>
  )
}

export default ColorPicker
import React from 'react'

export default function Button({text, width, height, onClick, disabled}) {
  
  return (
    <button 
    onClick={onClick}
    style={{
            width: `${width}`,
            height: `${height}`
          }}
         disabled={disabled}
    >
      {text}
  
    </button>
  )
}
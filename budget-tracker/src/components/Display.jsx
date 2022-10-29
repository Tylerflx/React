import React from 'react'


const Display = (props) => {
  return (
    <div className={`alert alert-${props.type}`}>
        <span>{props.name}: {props.amount}</span>
    </div>
  )
}

export default Display
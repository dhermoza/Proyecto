import React from 'react'

const Garden = (props) => {

  return (
    <div className="pt-3">
      <div className="card p-3">
      <h6>Garden: {props.title}</h6>
      <p>Address: {props.address}</p>
      </div>
    </div>
  )
}

export default Garden

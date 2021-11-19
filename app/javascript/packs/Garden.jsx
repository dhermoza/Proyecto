import React from 'react'

const Garden = ({garden, removeGarden}) => {

  return (
    <div className="pt-3">
      <div className="card p-3 w-75" key={garden.id}>
        <div className="card-body">
          <h4>{garden.title}</h4>
          <p>Address: {garden.address}</p>
          <button className="btn btn-danger" onClick={() => removeGarden(garden.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default Garden

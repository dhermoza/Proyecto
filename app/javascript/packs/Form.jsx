import React, { useState} from 'react'

const Form = (props) => {
  const [garden, setGarden] = useState(props.initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setGarden({ ...garden, [name]: value })
  };

  const saludar = () => {
    console.log("holi")
  }
  return (
    <div className="pt-3">
      <form onSubmit={ event => {
        event.preventDefault()
        if (!garden.title || !garden.address) return;
        props.addGarden(garden.title, garden.address)
        setGarden(props.initialFormState)
      }}>
        <div className="col-6 form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" name="title" value={garden.title} onChange={handleInputChange} placeholder="Enter title"/>
        </div>
        <div className="col-6 form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" name="address" value={garden.address} onChange={handleInputChange} placeholder="Enter Address" />
        </div>

        <button type="Create Garden" className="btn btn-primary" onClick={saludar()}>Add a Garden</button>
      </form>
    </div>
  )
}

export default Form

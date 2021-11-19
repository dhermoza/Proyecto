import React, { useState, useEffect}from 'react'
import axios from 'axios';
import Garden from './Garden';
import Form from './Form';

const GardenList = (props) => {
  // const [gardens, setGardens] = useState([]);


  useEffect(() => {
    axios.get('/api/v1/gardens.json')
      .then(res => setGardens(res.data))
  }, []);

  const [gardens, setGardens] = useState([]);

  const initialFormState = {
    title: '',
    address: ''
  };

  const addGarden = garden => {
    // const qs = require('qs');
    axios({
      method: 'post',
      url: '/api/v1/gardens',
      headers: {
        'Content-Type': 'application/json' ,
        'X-User-Email': 'denise@gmail.com',
        'X-User-Token': 'iykqfJN1vZqtvmEpxxyK'
      },
      data:  {
          garden: {
            title: garden.title,
            address: garden.address
          }
        }
    })
      .then(res => (console.log(res)))
      .catch(error => console.log(error))
      setGardens([...gardens, garden]); ;

    //axios.post('/api/v1/gardens', qs.stringify(
    //  {
    //    garden: {
    //      title: garden.title,
    //      address: garden.address
    //    }
    //  }))
    //  .then(res => (console.log(res)))
    //  .catch(error => console.log(error))

    //setGardens([...gardens, garden]);
  };

  const removeGarden = id => {
    axios.delete('/api/v1/gardens/' + id)
      .then(response => {
        setGardens(gardens.filter(garden => garden.id !== id))
      })
      .catch(error => console.log(error))
  };

  return (
    <div>
      <div>
        <h6>Lista de Jardines</h6>
        <div className="d-flex justify-content">
          {gardens.map((garden, _) => (
                <Garden garden={garden} removeGarden={removeGarden}></Garden>
            ))}
        </div>
      </div >
      <br />
      <div>
        <h6>Crear un nuevo Jardin</h6>
        <Form addGarden={addGarden} initialFormState={initialFormState}></Form>
      </div>
    </div>
  )
}

export default GardenList

//Garden key={index} title={garden.title} address={garden.address} removeGarden={removeGarden}></Garden>

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Form from './Form'
import Garden from './Garden'
import GardenList from './GardenList'

const Hello = ({name, dataset}) =>  {
  const saludar = () => {
    console.log("holi")
  }

return (
  <div className="container">
    <div>
      <div className="d-flex justify-content-between">Hello {name}!</div>

    </div>
  </div>
)
}
//<button onClick={saludar}>Crear un nuevo jardín</button>
//Hello.defaultProps = {
 // name: 'David'
//}

//Hello.propTypes = {
//  name: PropTypes.string
//}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector("#root");
  if (node) {
    ReactDOM.render(
      <div>
        <GardenList></GardenList>
      </div>
      , node);
  }
})

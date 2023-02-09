import React from 'react'
import ReactDOM from 'react-dom'

import Father from './components/Father'
import Son from './components/Son'

ReactDOM.render(
  <div>
      <Father nome="Paulo" sobrenome="Silva">
        <Son nome="Pedro" sobrenome="Silva"/>
        <Son nome="Paula" sobrenome="Silva"/>
        <Son nome="Carla" sobrenome="Silva"/>
      </Father>  
  </div>
, document.getElementById('root'))

import React from 'react'
import Navbar from '../header/header'
import Dobra from '../Dobra01/dobra01'
import Dobra02 from '../Dobra02/dobra02'
import Dobra03 from '../Dobra03/dobra03'
import './home.css'

import Arcoazul from '../../assets/vetor-logo.svg'




const home = () => {
  return (
    
    <div className='container'>
      
        <Navbar/>

        <div className='arcos'>
            <img  src={Arcoazul} />
        </div>
   
        <Dobra/>
        <Dobra02/>
        <Dobra03/>



    </div>
  )
}

export default home
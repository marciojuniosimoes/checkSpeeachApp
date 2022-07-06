import ReCAPTCHA from 'react-google-recaptcha'

import React from 'react'
import "./recaptcha.css"

function verificarRetorno(e){
    alert(e)
    console.log(e)
}

const recaptcha = () => {
  return (
    <div className='recaptcha-div'>
        <ReCAPTCHA
        sitekey='6Lcxi8cgAAAAAFxtOay8pT8fulEfu94imI_wabHI'
        data-theme='ligth'
        onChange={verificarRetorno}
        
        />


    </div>
  )
}

export default recaptcha
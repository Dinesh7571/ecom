import React from 'react'

import './QuantityInput.css'

const QuantityInput = () => {
  return (
    <>  <button className="quantity_input_button" disabled>{" "}-{"  "}</button>
    <p className="quantity_input_count">1</p>
    <button className="quantity_input_button" >+</button></>
   
  )
}

export default QuantityInput
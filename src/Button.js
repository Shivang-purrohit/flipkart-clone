import React from 'react'

const Button = () => {
  const alertMsg = () => {
    alert("Added to Cart")
  }
  return (
    <button type="button" onClick={alertMsg} class="btn btn-primary button_add">Add to Cart</button>
  )
}

export default Button
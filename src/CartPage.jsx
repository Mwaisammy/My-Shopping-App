import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {

    const products = useSelector((state) => state.cart.cart)
    console.log(); // Check the contents of products array

  return (
    <div>
      <h1>Your Cart</h1>

      {products.map((product) => (
        <div key={product.id}>
            <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

export default CartPage

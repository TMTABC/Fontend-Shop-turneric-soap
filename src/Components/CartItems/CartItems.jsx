import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

export const CartItems = () => {
  const { allproduct, cartItems, removeFromCart } = useContext(ShopContext)

  return (
    <div className='cartItems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <div className="cartitems-format">
          <img src="" alt="" className='cartion-product-icon' />
          <p></p>
          <p></p>
          <button className='cartitems-quantity'></button>
          <p></p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

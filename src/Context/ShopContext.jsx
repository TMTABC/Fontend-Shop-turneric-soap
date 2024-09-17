import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContexProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId, quantity) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log("Cart", cartItems);
    }
    // const addToCart = (itemId, quantity) => {
    //     setCartItems((prev) => {
    //         const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + quantity };
    //         console.log("Updated cart:", updatedCart);
    //         return updatedCart;
    //     });
    // };

    const removeFromCart = (itemId, quantity) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - quantity }))
    }

    const ContexValue = { all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={ContexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContexProvider;
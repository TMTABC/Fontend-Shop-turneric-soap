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

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    // const addToCart = (itemId, ) => {
    //     setCartItems((prev) => {
    //         const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
    //         console.log("Updated cart:", updatedCart);
    //         return updatedCart;
    //     });
    // };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfor = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfor.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const ContexValue = { getTotalCartAmount, getTotalCartItem, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={ContexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContexProvider;
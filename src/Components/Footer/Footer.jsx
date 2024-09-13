import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Product</li>
                <li>About</li>
                <li>Contract</li>
            </ul>
            <div className="footer-social-icon">
                <img src="" alt="" />
            </div>
        </div>
    )
}

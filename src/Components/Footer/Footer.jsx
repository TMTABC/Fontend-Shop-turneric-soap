import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from '../Assets/facebook.png'

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
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt="" />
                </div>
                <div className='footer-icons-container'>
                    <img src={pintester_icon} alt="" />
                </div>
                <div className='footer-icons-container'>
                    <img src={whatapp_icon} alt="" />
                </div>
                <div className='footer-icons-container'>
                    <img src={facebook_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reseved </p>
            </div>
        </div>
    )
}

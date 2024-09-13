import React from 'react'
import './Header.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Header = () => {
    return (
        <div className='header'>
            <div className="header-left">
                <h2>New arrivals Only</h2>
                <div>
                    <div className="header-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="header-lastest-btn">
                    <div>Lastest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="header-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

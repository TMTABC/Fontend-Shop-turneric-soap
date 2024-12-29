import React from 'react'
import './Header.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
export const Header = () => {
    return (
        <div className='header'>
            <div className="header-left">
                <h2>Chỉ có hàng mới</h2>
                <div>
                    <div className="header-hand-icon">
                        <p>Mới</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Những bộ sản phẩm mới</p>
                    <p>dành cho bạn</p>
                </div>
                <div className="header-lastest-btn">
                    <div>Sản phẩm mới</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="header-right">
                <img src="https://vn-test-11.slatic.net/p/ae45fa4fc810b43ef2f5c8051b977b86.jpg" alt="xà phòng nghệ" />
            </div>
        </div>
    );
};

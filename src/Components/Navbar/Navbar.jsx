import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/online-shopping.png'
import cart_icon from '../Assets/shopping-cart.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const menuItems = {
    shop: { label: 'Shop', url: '/' },
    instruction: { label: 'Gioi Thieu', url: '/instruction' },
    product: { label: 'Sam Pham', url: '/product' },
    process: { label: 'Quy Trinh San Xuat', url: '/process' },
    // Bạn có thể thêm nhiều mục khác ở đây
  };

  return (
    <div className='nav-bar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* <li onClick={() => { setMenu('product') }}>Sam Pham {menu === 'product' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('process') }}>Quy Trinh San Xuat {menu === 'product' ? <hr /> : <></>}</li> */}
        {Object.keys(menuItems).map((item) => (
          <li key={item} onClick={() => setMenu(item)}>
            <Link to={menuItems[item].url} style={{ textDecoration: 'none' }}>
              {menuItems[item].label}
            </Link>
            {menu === item && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-cout">0</div>
      </div>
    </div>
  )
}

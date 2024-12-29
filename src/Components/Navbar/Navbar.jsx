import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/online-shopping.png'
import cart_icon from '../Assets/shopping-cart.png'
import { Link,useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/settings.png'
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';


const ProductMenu = React.forwardRef(({ focusNext, focusPrevious, currentPath }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'product-popper' : undefined;

    return (
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <div onMouseLeave={() => setAnchorEl(null)}>
                <ListItemButton
                    aria-haspopup
                    aria-expanded={open ? 'true' : 'false'}
                    ref={ref}
                    role="menuitem"
                    onFocus={(event) => setAnchorEl(event.currentTarget)}
                    onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
                    className={currentPath === '/allproduct' ? 'active' : ''}
                >
                    <Link to="/allproduct" style={{ textDecoration: 'none' }}>Sản phẩm</Link>
                    <KeyboardArrowDown />
                </ListItemButton>
                <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted modifiers={[{ name: 'zIndex', options: { zIndex: 9999 } }]}>
                    <List
                        role="menu"
                        sx={{
                            my: 2,
                            boxShadow: 'md',
                            borderRadius: 'sm',
                            zIndex: 1000,
                            position: 'relative',
                            background: '#fff'
                        }}
                    >
                        <ListItem>
                            <Link to="/xaphong" style={{ textDecoration: 'none' } }className={currentPath === '/xaphong' ? 'active' : ''}>Xà phòng</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/suatam" style={{ textDecoration: 'none' }} className={currentPath === '/suatam' ? 'active' : ''}>Sữa tắm</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/dauduong" style={{ textDecoration: 'none' }} className={currentPath === '/dauduong' ? 'active' : ''}>Dầu dưỡng</Link>
                        </ListItem>
                    </List>
                </Popper>
            </div>
        </ClickAwayListener>
    );
});

export default function ExampleNavigationMenu() {
    const location = useLocation();
    const currentPath = location.pathname; // Lấy URL hiện tại

    return (
        <Box sx={{ minHeight: 50 }}>
            <List role="menubar" orientation="horizontal">
                <ListItem>
                    <Link to="/" style={{ textDecoration: 'none' }} className={currentPath === '/' ? 'active' : ''}>Trang chủ</Link>
                </ListItem>
                <ListItem>
                    <ProductMenu currentPath={currentPath} />
                </ListItem>
                <ListItem>
                    <Link to="/process" style={{ textDecoration: 'none' }} className={currentPath === '/process' ? 'active' : ''}>Quy Trình Sản Xuất</Link>
                </ListItem>
            </List>
        </Box>
    );
}


export const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { getTotalCartItem } = useContext(ShopContext);
    const menuRef = useRef();
    const menuItems = {
        shop: { label: 'Shop', url: '/' },
        product: { label: 'Sản Phẩm', url: '/allproduct' },
        process: { label: 'Quy Trình Sản Xuất', url: '/process' },
    };

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    return (
        <div className='nav-bar'>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>

            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ExampleNavigationMenu />

            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? (
                    <button onClick={() => {
                        localStorage.removeItem('auth-token');
                        window.location.replace('/');
                    }}>Logout</button>
                ) : (
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                )}

                <Link to='/cart'>
                    <img src={cart_icon} alt="cart icon" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    );
};

import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const { product } = props;
    const [quantity, setQuantity] = useState(1); // Giá trị mặc định là 1
    const { addToCart } = useContext(ShopContext)
    const handleIncrease = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 100)); // Giới hạn tối đa là 100
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Giới hạn tối thiểu là 1
    };

    const handleQuantityChange = (e) => {
        const value = Math.max(0, Math.min(100, Number(e.target.value))); // Giới hạn giá trị giữa 1 và 100
        setQuantity(value);
    };
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">

                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">{product.old_prices}</div>
                    <div className="productdisplay-right-prices-new">{product.new_prices}</div>
                </div>
                <div className="productdisplay-right-description">
                    100% BỘT NGHỆ NGUYÊN CHẤT, KHÔNG CHẤT BẢO QUẢN. NGHỆ ĐỎ XÀ CỪ NHẬP TỪ ẤN ĐỘ, HÀM LƯỢNG CURCUMIN 4-5% CAO HƠN LOẠI NGHỆ KHÁC, CÓ GIÁ TRỊ DƯỢC LIỆU CAO NÊN ĐƯỢC SỬ DỤNG TRONG Y HỌC CỔ TRUYỀN VÀ TÂY Y. BỘT NGHỆ ĐỎ BEHONEY ĐƯỢC  SẢN XUẤT THEO QUY TRÌNH AN TOÀN VỆ SINH THỰC PHẨM.
                </div>
                {/* <div className="productdisplay-right-size">
                    <h1>Select quantity</h1>
                    <div className="productdisplay-right-weight">
                        <div>100g</div>
                        <div>200g</div>
                        <div>500g</div>
                        <input type="number" />
                    </div>
                </div> */}
                <div className="productdisplay-right-size">
                    <h1>Select quantity</h1>
                    <div className="quantity-selector">
                        <button onClick={handleDecrease} className="quantity-btn">-</button>
                        <input
                            type="number"
                            className="quantity-input"
                            min="0"
                            max="1000"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button onClick={handleIncrease} className="quantity-btn">+</button>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }} className='add-to-cart-btn'>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>Nghe,Soap</p>
                <p className='productdisplay-right-category'><span>Tag :</span>Nghe,Soap</p>

            </div>
        </div>
    )
}

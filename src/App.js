import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shop } from './Pages/Shop';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/instruction' element={<ShopCategory category='instruction' />} />
          <Route path='/allproduct' element={<ShopCategory category='allproduct' />} />
          <Route path='/process' element={<ShopCategory category='process' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

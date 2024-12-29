import './App.css';
import ExampleNavigationMenu, { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shop } from './Pages/Shop';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Process from "./Pages/Process";
import {Chatbox} from "./Components/Chatbox/Chatbox";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          {/* <Route path='/instruction' element={<ShopCategory banner={men_banner} category='instruction' />} />
          <Route path='/allproduct' element={<ShopCategory banner={women_banner} category='allproduct' />} />
          <Route path='/process' element={<ShopCategory banner={kid_banner} category='process' />} /> */}
          {/*<Route path='/instruction' element={<ShopCategory banner={men_banner} category='men' />} />*/}
          <Route path='/allproduct' element={<ShopCategory banner={women_banner} />} />
          <Route path='/suatam' element={<ShopCategory banner={women_banner} category='suatam' />} />
          <Route path='/xaphong' element={<ShopCategory banner={women_banner} category='xaphong' />} />
          <Route path='/dauduong' element={<ShopCategory banner={women_banner} category='dauduong' />} />
          {/*<Route path='/process' element={<ShopCategory banner={kid_banner} category='kid' />} />*/}
          <Route path='/process' element={<Process />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Chatbox/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

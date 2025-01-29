
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/homepage/Footer'
import Header from './components/homepage/Header'
import { HomePage } from './components/homepage/HomePage'
import ProductDetailPage from './components/page/ProductDetailPage'
import CartPage from './components/page/CartPage'
import CheckoutPage from './components/page/CheckoutPage'
import AccountPage from './components/page/AccountPage'
import SupportPage from './about/SupportPage'
import PromotionsPage from './components/page/PromotionsPage'
import ProductPage from './components/page/ProductPage'

// import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product-page" element={<ProductPage/>}/>
          <Route path="/product/:id" element={<ProductDetailPage/>} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/check-out" element={<CheckoutPage/>}/>
          <Route path="/account" element={<AccountPage/>} />
          <Route path='/support' element={<SupportPage/>}/>
          <Route path='/promotion' element={<PromotionsPage/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

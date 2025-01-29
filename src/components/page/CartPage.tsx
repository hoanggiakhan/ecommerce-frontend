// src/components/CartPage.tsx
import React, { useState } from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/ScrollToTop';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  useScrollToTop();
  // Giỏ hàng mẫu
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Snack Lay's",
      image: './../../../public/snack.jpg',
      price: 15000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Trà Sữa Đóng Chai',
      image: './../../../public/trasua.jpg',
      price: 25000,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Nước Ngọt Có Ga',
      image: './../../../public/nuoc.jpg',
      price: 12000,
      quantity: 3,
    },
  ]);

  const shippingFee = 20000; // Phí vận chuyển cố định

  // Xử lý thay đổi số lượng sản phẩm
  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Tính tổng giá
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Giỏ Hàng</h1>
      <div className="cart-container">
        {/* Danh sách sản phẩm trong giỏ */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Giá: {item.price.toLocaleString()}₫</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-actions">
                <p>Tổng: {(item.price * item.quantity).toLocaleString()}₫</p>
                <button onClick={() => handleRemoveItem(item.id)}>Xóa</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tóm tắt thanh toán */}
        <div className="cart-summary">
          <h2>Tóm Tắt Thanh Toán</h2>
          <div className="summary-line">
            <span>Tổng giá:</span>
            <span>{calculateTotal().toLocaleString()}₫</span>
          </div>
          <div className="summary-line">
            <span>Phí vận chuyển:</span>
            <span>{shippingFee.toLocaleString()}₫</span>
          </div>
          <div className="summary-line total">
            <span>Tổng thanh toán:</span>
            <span>{(calculateTotal() + shippingFee).toLocaleString()}₫</span>
          </div>
          <Link to={'/check-out'}><button className="checkout-button">Thanh Toán</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

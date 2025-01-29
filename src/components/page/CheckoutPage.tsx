// src/components/CheckoutPage.tsx
import React, { useState } from 'react';
import './CheckoutPage.css';
import useScrollToTop from '../../hooks/ScrollToTop';

const CheckoutPage: React.FC = () => {
  useScrollToTop();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<string>('cod');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic gửi thông tin đơn hàng
    console.log('Thông tin khách hàng:', customerInfo);
    console.log('Phương thức thanh toán:', paymentMethod);
    alert('Đặt hàng thành công!');
  };

  return (
    <div className="checkout-page">
      <h1>Thanh Toán</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Thông tin khách hàng */}
        <div className="form-section">
          <h2>Thông Tin Khách Hàng</h2>
          <label>
            Họ Tên:
            <input
              type="text"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
              required
              placeholder="Nhập họ tên"
            />
          </label>
          <label>
            Số Điện Thoại:
            <input
              type="tel"
              name="phone"
              value={customerInfo.phone}
              onChange={handleInputChange}
              required
              placeholder="Nhập số điện thoại"
            />
          </label>
          <label>
            Địa Chỉ Giao Hàng:
            <textarea
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              required
              placeholder="Nhập địa chỉ giao hàng"
            />
          </label>
        </div>

        {/* Phương thức thanh toán */}
        <div className="form-section">
          <h2>Phương Thức Thanh Toán</h2>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={handlePaymentChange}
            />
            Thanh toán khi nhận hàng (COD)
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={handlePaymentChange}
            />
            Chuyển khoản ngân hàng
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="e-wallet"
              checked={paymentMethod === 'e-wallet'}
              onChange={handlePaymentChange}
            />
            Ví điện tử (Momo, ZaloPay, v.v.)
          </label>
        </div>

        {/* Nút xác nhận đặt hàng */}
        <button type="submit" className="confirm-button">
          Xác Nhận Đặt Hàng
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;

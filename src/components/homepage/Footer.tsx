// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Thông tin liên hệ */}
        <div className="footer-section">
          <h4>Thông Tin Liên Hệ</h4>
          <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
          <p>Điện thoại: 0909 123 456</p>
          <p>Email: lienhe@cuahangtienloi.com</p>
        </div>

        {/* Chính sách */}
        <div className="footer-section">
          <h4>Chính Sách</h4>
          <ul>
            <li><a href="/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
            <li><a href="/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
            <li><a href="/chinh-sach-thanh-toan">Chính sách thanh toán</a></li>
          </ul>
        </div>

        {/* Liên kết mạng xã hội */}
        <div className="footer-section">
          <h4>Kết Nối Với Chúng Tôi</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="./../../../public/fb.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="./../../../public/inta.jpg" alt="Instagram" />
            </a>
            <a href="https://zalo.me/pc" target="_blank" rel="noopener noreferrer">
              <img src="./../../../public/zalo.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Cửa Hàng Tiện Lợi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

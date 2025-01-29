// src/components/PromotionsPage.tsx
import React from 'react';
import './PromotionsPage.css';
import useScrollToTop from '../../hooks/ScrollToTop';

interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: number;
  validUntil: string;
}

const PromotionsPage: React.FC = () => {
  useScrollToTop();
  // Danh sách khuyến mãi mẫu
  const promotions: Promotion[] = [
    {
      id: 1,
      title: 'Giảm giá 20% toàn bộ sản phẩm',
      description: 'Áp dụng cho tất cả các sản phẩm trong danh mục đồ uống.',
      image: './../../../public/inta.jpg',
      discount: 20,
      validUntil: '2025-02-01',
    },
    {
      id: 2,
      title: 'Mua 2 tặng 1',
      description: 'Chương trình ưu đãi khi mua 2 sản phẩm sẽ được tặng 1 sản phẩm miễn phí.',
      image: './../../../public/zalo.png',
      discount: 33,
      validUntil: '2025-02-15',
    },
    {
      id: 3,
      title: 'Freeship đơn hàng từ 300k',
      description: 'Miễn phí vận chuyển cho các đơn hàng trên 300,000₫.',
      image: './../../../public/fb.png',
      discount: 0,
      validUntil: '2025-01-31',
    },
  ];

  return (
    <div className="promotions-page">
      <h1>Chương Trình Khuyến Mãi</h1>

      {/* Banner khuyến mãi */}
      <div className="promotion-banner">
        <img src="./../../../public/banner.jpg" alt="Khuyến Mãi Đặc Biệt" />
        <h2>Nhận ngay ưu đãi hấp dẫn!</h2>
      </div>

      {/* Danh sách khuyến mãi */}
      <div className="promotions-list">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="promotion-card">
            <img src={promotion.image} alt={promotion.title} className="promotion-image" />
            <div className="promotion-details">
              <h3>{promotion.title}</h3>
              <p>{promotion.description}</p>
              <p>
                <strong>Hạn dùng:</strong> {promotion.validUntil}
              </p>
              {promotion.discount > 0 && (
                <span className="discount-badge">-{promotion.discount}%</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsPage;

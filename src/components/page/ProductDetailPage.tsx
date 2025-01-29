// src/components/ProductDetailPage.tsx
import React, { useState } from 'react';
import './ProductDetailPage.css';
import useScrollToTop from '../../hooks/ScrollToTop';

interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  discount?: number; // Phần trăm khuyến mãi
  description: string;
  rating: number;
  relatedProducts: Product[];
}

const ProductDetailPage: React.FC = () => {
  useScrollToTop();
  // Thông tin sản phẩm mẫu
  const product: Product = {
    id: 1,
    name: 'Snack Khoai Tây Lay\'s',
    images: [
      './../../../public/snack.jpg',
    ],
    price: 15000,
    discount: 10,
    description: 'Snack khoai tây giòn tan, hương vị thơm ngon, thích hợp cho mọi bữa ăn nhẹ.',
    rating: 4.5,
    relatedProducts: [
      {
        id: 2,
        name: 'Trà Sữa Đóng Chai',
        images: ['./../../../public/trasua.jpg'],
        price: 25000,
        description: 'Trà sữa hương vị truyền thống, đóng chai tiện lợi.',
        rating: 4.8,
        relatedProducts: [],
      },
      {
        id: 3,
        name: 'Nước Ngọt Có Ga',
        images: ['./../../../public/nuoc.jpg'],
        price: 12000,
        description: 'Nước ngọt có ga giải khát, hương vị đậm đà.',
        rating: 4.3,
        relatedProducts: [],
      },
      {
        id: 3,
        name: 'Nước Ngọt Có Ga',
        images: ['./../../../public/nuoc.jpg'],
        price: 12000,
        description: 'Nước ngọt có ga giải khát, hương vị đậm đà.',
        rating: 4.3,
        relatedProducts: [],
      },
    
    ],
  };

  const [quantity, setQuantity] = useState<number>(1);
  const [reviews, setReviews] = useState<string[]>([]); // Danh sách đánh giá
  const [newReview, setNewReview] = useState<string>(''); // Đánh giá mới

  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
  };

  // Xử lý thêm đánh giá
  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview('');
    }
  };

  return (
    <div className="product-detail-page">
      {/* Hình ảnh sản phẩm */}
      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="product-image" />
        ))}
      </div>

      {/* Thông tin chi tiết */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">
          {product.discount && <span className="original-price">{product.price.toLocaleString()}₫</span>}
          {discountedPrice.toLocaleString()}₫
        </p>
        {product.discount && <p className="discount">Giảm giá {product.discount}%</p>}
        <p className="product-description">{product.description}</p>
        <div className="quantity-selector">
          <label>Số lượng:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </button>
      </div>

      {/* Đánh giá sản phẩm */}
      <div className="product-reviews">
        <h2>Đánh Giá Sản Phẩm</h2>
        <ul className="reviews-list">
          {reviews.length === 0 ? (
            <p>Chưa có đánh giá nào.</p>
          ) : (
            reviews.map((review, index) => <li key={index}>{review}</li>)
          )}
        </ul>
        <textarea
          value={newReview}
          placeholder="Viết đánh giá..."
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button className="add-to-cart" onClick={handleAddReview}>Thêm Đánh Giá</button>
      </div>

      {/* Sản phẩm liên quan */}
      <div className="related-products">
        <h2>Sản Phẩm Liên Quan</h2>
        <div className="related-list">
          {product.relatedProducts.map((related) => (
            <div key={related.id} className="related-card">
              <img src={related.images[0]} alt={related.name} />
              <p>{related.name}</p>
              <p>{related.price.toLocaleString()}₫</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

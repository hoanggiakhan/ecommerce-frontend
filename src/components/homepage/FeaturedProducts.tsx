import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedProducts.css';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onAddToCart }) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(10); // Số lượng sản phẩm hiển thị ban đầu

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Hiển thị thêm 10 sản phẩm
  };

  // Lấy danh sách sản phẩm được hiển thị
  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="featured-products">
      <h2>Sản Phẩm Nổi Bật</h2>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card" 
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.toLocaleString()}₫</p>
            <button
              className="add-to-cart-button"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product.id);
              }}
            >
              Thêm Vào Giỏ
            </button>
          </div>
        ))}
      </div>

      {/* Nút "Xem thêm" */}
      {visibleCount < products.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMore}>
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;

import React, { useState } from 'react';
import './ProductPage.css';
import useScrollToTop from '../../hooks/ScrollToTop';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  brand: string;
  isBestSeller: boolean;
}

const ProductPage: React.FC = () => {
  useScrollToTop();

  const products: Product[] = [
    { id: 1, name: 'Snack Khoai Tây', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 15000, rating: 4.5, brand: 'Lay\'s', isBestSeller: true },
    { id: 2, name: 'Trà Sữa Đóng Chai', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/trasua_oswygo.jpg', price: 25000, rating: 4.8, brand: 'MilkTea Co.', isBestSeller: false },
    { id: 3, name: 'Nước Ngọt Có Ga', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/nuoc_ilvnsd.jpg', price: 12000, rating: 4.3, brand: 'Coca-Cola', isBestSeller: true },
    { id: 4, name: 'Mì Gói', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/mi_ns4zls.jpg', price: 10000, rating: 4.0, brand: 'Hảo Hảo', isBestSeller: false },
    { id: 5, name: 'Snack Khoai Tây', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 15000, rating: 4.5, brand: 'Lay\'s', isBestSeller: true },
    { id: 6, name: 'Trà Sữa Đóng Chai', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/trasua_oswygo.jpg', price: 25000, rating: 4.8, brand: 'MilkTea Co.', isBestSeller: false },
    { id: 7, name: 'Nước Ngọt Có Ga', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/nuoc_ilvnsd.jpg', price: 12000, rating: 4.3, brand: 'Coca-Cola', isBestSeller: true },
    { id: 8, name: 'Mì Gói', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/mi_ns4zls.jpg', price: 10000, rating: 4.0, brand: 'Hảo Hảo', isBestSeller: false },
    { id: 9, name: 'Snack Khoai Tây 2', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 17000, rating: 4.7, brand: 'Lay\'s', isBestSeller: true },
    { id: 10, name: 'Trà Sữa Chai 2', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/trasua_oswygo.jpg', price: 26000, rating: 4.9, brand: 'MilkTea Co.', isBestSeller: false },
    { id: 11, name: 'Snack Khoai Tây', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 15000, rating: 4.5, brand: 'Lay\'s', isBestSeller: true },
    { id: 12, name: 'Trà Sữa Đóng Chai', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1737635972/trasua_g7ozuv.jpg', price: 25000, rating: 4.8, brand: 'MilkTea Co.', isBestSeller: false },
    { id: 13, name: 'Nước Ngọt Có Ga', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/nuoc_ilvnsd.jpg', price: 12000, rating: 4.3, brand: 'Coca-Cola', isBestSeller: true },
    { id: 14, name: 'Mì Gói', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/mi_ns4zls.jpg', price: 10000, rating: 4.0, brand: 'Hảo Hảo', isBestSeller: false },
    { id: 15, name: 'Snack Khoai Tây', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 15000, rating: 4.5, brand: 'Lay\'s', isBestSeller: true },
    { id: 16, name: 'Trà Sữa Đóng Chai', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/trasua_oswygo.jpg', price: 25000, rating: 4.8, brand: 'MilkTea Co.', isBestSeller: false },
    { id: 17, name: 'Nước Ngọt Có Ga', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/nuoc_ilvnsd.jpg', price: 12000, rating: 4.3, brand: 'Coca-Cola', isBestSeller: true },
    { id: 18, name: 'Mì Gói', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/mi_ns4zls.jpg', price: 10000, rating: 4.0, brand: 'Hảo Hảo', isBestSeller: false },
    { id: 19, name: 'Snack Khoai Tây 2', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 17000, rating: 4.7, brand: 'Lay\'s', isBestSeller: true },
    { id: 20, name: 'Trà Sữa Chai 2', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1735209525/cld-sample-5.jpg', price: 26000, rating: 4.9, brand: 'MilkTea Co.', isBestSeller: false },
  ];

  const [sortOption, setSortOption] = useState<string>('latest');
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: 0,
    maxPrice: 1000000,
    minRating: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'priceAsc') return a.price - b.price;
    if (sortOption === 'priceDesc') return b.price - a.price;
    if (sortOption === 'bestSeller') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    return b.id - a.id;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    const { brand, minPrice, maxPrice, minRating } = filters;
    return (
      (brand ? product.brand === brand : true) &&
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.rating >= minRating
    );
  });

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    setFilters({ ...filters, [key]: value });
    setCurrentPage(1); // Reset về trang đầu tiên khi thay đổi bộ lọc
  };

  return (
    <div className="product-page">
      <aside className="filter-sidebar">
        <h3>Lọc Sản Phẩm</h3>
        {/* Bộ lọc */}
        <div className="filter-group">
          <label>Thương hiệu:</label>
          <select onChange={(e) => handleFilterChange('brand', e.target.value)}>
            <option value="">Tất cả</option>
            <option value="Lay's">Lay's</option>
            <option value="MilkTea Co.">MilkTea Co.</option>
            <option value="Coca-Cola">Coca-Cola</option>
            <option value="Hảo Hảo">Hảo Hảo</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Khoảng giá:</label>
          <input
            type="number"
            placeholder="Giá tối thiểu"
            onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Giá tối đa"
            onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
          />
        </div>
        <div className="filter-group">
          <label>Đánh giá tối thiểu:</label>
          <input
            type="number"
            placeholder="Số sao"
            step="0.1"
            onChange={(e) => handleFilterChange('minRating', Number(e.target.value))}
          />
        </div>
        <div className="filter-group">
          <label>Sắp xếp:</label>
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="latest">Mới nhất</option>
            <option value="priceAsc">Giá tăng dần</option>
            <option value="priceDesc">Giá giảm dần</option>
            <option value="bestSeller">Bán chạy nhất</option>
          </select>
        </div>
      </aside>

      <main className="product-list">
        <h2>Danh Sách Sản Phẩm</h2>
        <div className="products">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price.toLocaleString()}₫</p>
              <p className="product-rating">Đánh giá: {product.rating} ⭐</p>
              <button className="add-to-cart">Thêm vào giỏ hàng</button>
            </div>
          ))}
        </div>
        {/* Phân trang */}
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
          >
            &laquo; {/* Biểu tượng mũi tên trái */}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
          >
            &raquo; {/* Biểu tượng mũi tên phải */}
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;

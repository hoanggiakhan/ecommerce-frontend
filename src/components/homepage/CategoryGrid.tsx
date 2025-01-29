import React, { useState, useEffect } from 'react';
import './CategoryGrid.css';

interface CategoryProps {
  categories: {
    id: number;
    name: string;
    imageUrl: string;
  }[];
}

const Category: React.FC<CategoryProps> = ({ categories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage >= categories.length ? 0 : prevIndex + itemsPerPage
      );
    }, 3000); // Chuyển slide mỗi 3 giây
    return () => clearInterval(interval); // Xóa interval khi component unmount
  }, [categories.length, itemsPerPage]);

  return (
    <div className="category-container">
      <h2 className="category-title">Danh Mục Sản Phẩm</h2>
      <div className="carousel-wrapper">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
            }}
          >
            {categories.map((category) => (
              <div key={category.id} className="category-item">
                <div className="image-wrapper">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="category-image"
                  />
                </div>
                <h3 className="category-name">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

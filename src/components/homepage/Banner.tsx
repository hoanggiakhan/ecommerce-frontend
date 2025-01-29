import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Đảm bảo import Bootstrap CSS

interface BannerProps {
  banners: {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
  }[];
}

const BannerCarousel: React.FC<BannerProps> = ({ banners }) => {
  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators (các chấm hiển thị slide hiện tại) */}
      <div className="carousel-indicators">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${banner.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px', // Chiều cao banner
            }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h1>{banner.title}</h1>
              <p>{banner.subtitle}</p>
              <button className="btn btn-primary">Mua ngay</button>
            </div>
          </div>
        ))}
      </div>

      {/* Nút điều hướng (Previous & Next) */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BannerCarousel;

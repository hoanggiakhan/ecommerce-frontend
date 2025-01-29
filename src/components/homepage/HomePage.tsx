import useScrollToTop from "../../hooks/ScrollToTop";
import Banner from "./Banner";
import Category from "./CategoryGrid";
import FeaturedProducts from "./FeaturedProducts";

export const HomePage : React.FC = () => {
    useScrollToTop();
  const categories = [
    { id: 1, name: 'Thực Phẩm', imageUrl: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738118041/thucpham_um5ocv.jpg' },
    { id: 2, name: 'Đồ Uống', imageUrl: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738118041/douong_k2d0vn.jpg' },
    { id: 3, name: 'Vật Dụng', imageUrl: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738118041/vatdung_ycah1u.jpg' },
    { id: 4, name: 'Chăm Sóc Sức Khỏe', imageUrl: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738118041/suckhoe_uts0lj.jpg' },
  ];
  const banners = [
    {
      id: 1,
      title: 'Giảm giá 50%',
      subtitle: 'Chương trình khuyến mãi lớn nhất năm!',
      imageUrl: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117813/banner1_ayvqml.jpg',
    },
    {
      id: 2,
      title: 'Hàng Mới Về',
      subtitle: 'Khám phá bộ sưu tập mới nhất.',
      imageUrl: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117813/banner2_wsikjx.jpg',
    },
    {
      id: 3,
      title: 'Mua Sắm Thoải Mái',
      subtitle: 'Hãy tận hưởng trải nghiệm mua sắm tốt nhất.',
      imageUrl: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117813/banner3_do9hy3.jpg', // 1200x500
    },
  ];
  // Dữ liệu mẫu cho sản phẩm nổi bật
const products = [
  { id: 1, name: 'Snack Khoai Tây', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 15000 },
  { id: 2, name: 'Trà Sữa Đóng Chai', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/trasua_oswygo.jpg', price: 25000 },
  { id: 3, name: 'Nước Ngọt Có Ga', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/nuoc_ilvnsd.jpg', price: 12000 },
  { id: 4, name: 'Mì Gói', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/mi_ns4zls.jpg', price: 10000 },
  { id: 5, name: 'Snack Khoai Tây', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 15000 },
  { id: 6, name: 'Trà Sữa Đóng Chai', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/trasua_oswygo.jpg', price: 25000 },
  { id: 7, name: 'Nước Ngọt Có Ga', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/nuoc_ilvnsd.jpg', price: 12000 },
  { id: 8, name: 'Mì Gói', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/mi_ns4zls.jpg', price: 10000 },
  { id: 9, name: 'Snack Khoai Tây', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 15000 },
  { id: 10, name: 'Trà Sữa Đóng Chai', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/trasua_oswygo.jpg', price: 25000 },
  { id: 11, name: 'Nước Ngọt Có Ga', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/nuoc_ilvnsd.jpg', price: 12000 },
  { id: 12, name: 'Mì Gói', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/mi_ns4zls.jpg', price: 10000 },
  { id: 13, name: 'Snack Khoai Tây', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/snack_t0eqha.jpg', price: 15000 },
  { id: 14, name: 'Trà Sữa Đóng Chai', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/trasua_oswygo.jpg', price: 25000 },
  { id: 15, name: 'Nước Ngọt Có Ga', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/nuoc_ilvnsd.jpg', price: 12000 },
  { id: 16, name: 'Mì Gói', image: 'https://res.cloudinary.com/djf3au8db/image/upload/v1738117904/mi_ns4zls.jpg', price: 10000 },
];

// Hàm xử lý thêm vào giỏ hàng
const handleAddToCart = (productId: number) => {
  alert(`Sản phẩm với ID ${productId} đã được thêm vào giỏ hàng!`);
};
  return (
     <div>
          <Banner banners={banners}/>
         <Category categories={categories}/>
         <FeaturedProducts products={products} onAddToCart={handleAddToCart}/>
     </div>
  );
};
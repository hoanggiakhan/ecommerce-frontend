import useScrollToTop from "../../hooks/ScrollToTop";
import Banner from "./Banner";
import Category from "./CategoryGrid";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Header from "./Header";

export const HomePage : React.FC = () => {
    useScrollToTop();
  const categories = [
    { id: 1, name: 'Thực Phẩm', imageUrl: './../../../public/thucpham.jpg' },
    { id: 2, name: 'Đồ Uống', imageUrl: './../../../public/douong.jpg' },
    { id: 3, name: 'Vật Dụng', imageUrl: './../../../public/vatdung.jpg' },
    { id: 4, name: 'Chăm Sóc Sức Khỏe', imageUrl: './../../../public/suckhoe.jpg' },
  ];
  const banners = [
    {
      id: 1,
      title: 'Giảm giá 50%',
      subtitle: 'Chương trình khuyến mãi lớn nhất năm!',
      imageUrl: './../../../public/banner1.jpg',
    },
    {
      id: 2,
      title: 'Hàng Mới Về',
      subtitle: 'Khám phá bộ sưu tập mới nhất.',
      imageUrl: './../../../public/banner2.jpg',
    },
    {
      id: 3,
      title: 'Mua Sắm Thoải Mái',
      subtitle: 'Hãy tận hưởng trải nghiệm mua sắm tốt nhất.',
      imageUrl: './../../../public/banner3.jpg', // 1200x500
    },
  ];
  // Dữ liệu mẫu cho sản phẩm nổi bật
const products = [
  { id: 1, name: 'Snack Khoai Tây', image: './../../../public/snack.jpg', price: 15000 },
  { id: 2, name: 'Trà Sữa Đóng Chai', image: './../../../public/trasua.jpg', price: 25000 },
  { id: 3, name: 'Nước Ngọt Có Ga', image: './../../../public/nuoc.jpg', price: 12000 },
  { id: 4, name: 'Mì Gói', image: './../../../public/mi.jpg', price: 10000 },
  { id: 5, name: 'Snack Khoai Tây', image: './../../../public/snack.jpg', price: 15000 },
  { id: 6, name: 'Trà Sữa Đóng Chai', image: './../../../public/trasua.jpg', price: 25000 },
  { id: 7, name: 'Nước Ngọt Có Ga', image: './../../../public/nuoc.jpg', price: 12000 },
  { id: 8, name: 'Mì Gói', image: './../../../public/mi.jpg', price: 10000 },
  { id: 9, name: 'Snack Khoai Tây', image: './../../../public/snack.jpg', price: 15000 },
  { id: 10, name: 'Trà Sữa Đóng Chai', image: './../../../public/trasua.jpg', price: 25000 },
  { id: 11, name: 'Nước Ngọt Có Ga', image: './../../../public/nuoc.jpg', price: 12000 },
  { id: 12, name: 'Mì Gói', image: './../../../public/mi.jpg', price: 10000 },
  { id: 13, name: 'Snack Khoai Tây', image: './../../../public/snack.jpg', price: 15000 },
  { id: 14, name: 'Trà Sữa Đóng Chai', image: './../../../public/trasua.jpg', price: 25000 },
  { id: 15, name: 'Nước Ngọt Có Ga', image: './../../../public/nuoc.jpg', price: 12000 },
  { id: 16, name: 'Mì Gói', image: './../../../public/mi.jpg', price: 10000 },
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
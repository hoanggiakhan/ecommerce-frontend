// src/components/AccountPage.tsx
import React, { useState } from 'react';
import './AccountPage.css';
import useScrollToTop from '../../hooks/ScrollToTop';

// Định nghĩa kiểu dữ liệu
interface Order {
  id: number;
  date: string;
  total: number;
  status: string;
}

interface Address {
  id: number;
  address: string;
}

const AccountPage: React.FC = () => {
  useScrollToTop();
  // Thông tin cá nhân mẫu
  const [userInfo] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
  });

  // Lịch sử mua hàng mẫu
  const [orders] = useState<Order[]>([
    { id: 1, date: '2025-01-15', total: 300000, status: 'Hoàn thành' },
    { id: 2, date: '2025-01-10', total: 150000, status: 'Đang giao' },
    { id: 3, date: '2025-01-05', total: 200000, status: 'Đã hủy' },
  ]);

  // Danh sách địa chỉ giao hàng mẫu
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, address: '123 Đường ABC, Quận 1, TP.HCM' },
    { id: 2, address: '456 Đường XYZ, Quận 3, TP.HCM' },
  ]);

  // Hàm chỉnh sửa địa chỉ
  const handleEditAddress = (id: number, newAddress: string) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((addr) =>
        addr.id === id ? { ...addr, address: newAddress } : addr
      )
    );
  };

  return (
    <div className="account-page">
      <h1>Quản Lý Tài Khoản</h1>

      {/* Thông tin cá nhân */}
      <div className="section">
        <h2>Thông Tin Cá Nhân</h2>
        <p><strong>Họ Tên:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Số Điện Thoại:</strong> {userInfo.phone}</p>
      </div>

      {/* Lịch sử mua hàng */}
      <div className="section">
        <h2>Lịch Sử Mua Hàng</h2>
        <table className="order-history">
          <thead>
            <tr>
              <th>Mã Đơn</th>
              <th>Ngày Đặt</th>
              <th>Tổng Tiền</th>
              <th>Trạng Thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.total.toLocaleString()}₫</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Địa chỉ giao hàng */}
      <div className="section">
        <h2>Địa Chỉ Giao Hàng</h2>
        <ul className="address-list">
          {addresses.map((addr) => (
            <li key={addr.id} className="address-item">
              <span>{addr.address}</span>
              <button
                onClick={() => {
                  const newAddress = prompt('Nhập địa chỉ mới:', addr.address);
                  if (newAddress) handleEditAddress(addr.id, newAddress);
                }}
              >
                Chỉnh Sửa
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountPage;

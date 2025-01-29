// src/components/SupportPage.tsx
import React, { useState } from 'react';
import './SupportPage.css';

interface FAQ {
  question: string;
  answer: string;
}

const SupportPage: React.FC = () => {
  // Danh sách câu hỏi thường gặp
  const faqs: FAQ[] = [
    {
      question: 'Làm thế nào để đặt hàng?',
      answer: 'Bạn có thể chọn sản phẩm, thêm vào giỏ hàng và nhấn nút "Thanh toán" để hoàn tất.',
    },
    {
      question: 'Tôi có thể hủy đơn hàng không?',
      answer: 'Bạn có thể hủy đơn hàng trước khi đơn hàng được vận chuyển. Liên hệ với bộ phận hỗ trợ để được giúp đỡ.',
    },
    {
      question: 'Cửa hàng có hỗ trợ giao hàng toàn quốc không?',
      answer: 'Chúng tôi hỗ trợ giao hàng trên toàn quốc với nhiều phương thức vận chuyển khác nhau.',
    },
  ];

  // Trạng thái form liên hệ
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Thông tin liên hệ:', contactForm);
    alert('Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất!');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="support-page">
      <h1>Hỗ Trợ Khách Hàng</h1>

      {/* Câu hỏi thường gặp */}
      <div className="faq-section">
        <h2>Câu Hỏi Thường Gặp</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Form liên hệ hỗ trợ */}
      <div className="contact-section">
        <h2>Liên Hệ Hỗ Trợ</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Họ Tên:
            <input
              type="text"
              name="name"
              value={contactForm.name}
              onChange={handleInputChange}
              required
              placeholder="Nhập họ tên"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={contactForm.email}
              onChange={handleInputChange}
              required
              placeholder="Nhập email"
            />
          </label>
          <label>
            Nội Dung:
            <textarea
              name="message"
              value={contactForm.message}
              onChange={handleInputChange}
              required
              placeholder="Nhập nội dung cần hỗ trợ"
            />
          </label>
          <button type="submit" className="submit-button">
            Gửi Yêu Cầu
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;

# Quách Đại Dương — High-Tech Glassmorphism Portfolio Landing Page

Portfolio cá nhân chuyên nghiệp của **Quách Đại Dương** – Backend Developer tại Jupiter Solution, Sinh viên trường Đại học Công nghệ – ĐHQGHN (UET - VNU), Tác giả MedPal đoạt Giải Triển Vọng Google Developer on Campus (GDGOC) 2026.

![Style](https://img.shields.io/badge/Aesthetic-Crystal%20Glassmorphism%202026-0284c7)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-06b6d4)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-2563eb)
![AI](https://img.shields.io/badge/AI-MedGemma%20%7C%20FPT%20AI%20Factory-10b981)

---

## 🌟 Tính Năng Nổi Bật

* **Phong cách Thiết kế 2026:** Light Mode Glassmorphism (Trắng tuyết + Xanh biển / Cyan), viền khúc xạ kính 1px specular highlight, tương thích chuẩn tương phản cao WCAG AAA.
* **Hero Section 3D:** Card kính tương tác 3D theo chuyển động chuột với ảnh chân dung thực tế.
* **MedPal Flagship Showcase:** Trình diễn dự án y tế AI MedPal với ảnh mockup thực tế và phân tích kiến trúc hệ thống 4 tầng.
* **Interactive Dev Terminal:** Trực tiếp tương tác gọi API backend mô phỏng mô hình MedGemma trên hạ tầng FPT AI Factory.
* **Dấu ấn GDGOC 2026 & UET:** Vinh danh bằng chứng nhận Google Developer on Campus 2026 với hiệu ứng phóng to Lightbox.
* **Fullstack REST API:** Form liên hệ trực tiếp lưu tin nhắn vào cơ sở dữ liệu JSON, API profile động, bộ đếm số liệu thời gian thực.

---

## 🚀 Khởi Chạy Local (Development)

1. Cài đặt và build toàn bộ:
```bash
npm run build
```

2. Khởi chạy máy chủ:
```bash
# Khởi chạy server production thống nhất:
npm start

# Hoặc chế độ lập trình (dev):
# Terminal 1:
npm run server

# Terminal 2:
npm run client
```

* Ứng dụng client dev: `http://localhost:3000`
* Ứng dụng unified production: `http://localhost:5000`

---

## ☁️ Triển Khai Lên AWS

Xem chi tiết từng bước tại tài liệu: [AWS_DEPLOYMENT_GUIDE.md](file:///d:/Projects/Landing%20page%20c%C3%A1%20nh%C3%A2n%20vibecode%20af/AWS_DEPLOYMENT_GUIDE.md)

### Chạy nhanh bằng Docker:
```bash
docker compose up -d --build
```
Ứng dụng sẽ chạy tại cổng `80` (HTTP) trên máy chủ AWS của bạn.

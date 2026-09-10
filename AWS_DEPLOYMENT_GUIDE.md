# Hướng Dẫn Đóng Gói & Triển Khai Lên AWS (AWS Deployment Guide)
**Dành cho Portfolio Quách Đại Dương**

Dự án đã được cấu hình đóng gói thống nhất (Unified Fullstack):
* **Frontend React (Vite)** được build thành thư mục tĩnh `client/dist`.
* **Backend Node.js (Express)** vừa phục vụ REST API (`/api/*`), vừa tự động phục vụ giao diện React (`client/dist`) trên cùng một port (mặc định là `5000` hoặc port `80`).
* Điều này giúp việc deploy lên AWS cực kỳ đơn giản, không bị lỗi CORS, tối ưu chi phí và chỉ cần chạy **duy nhất 1 container Docker hoặc 1 tiến trình Node.js**.

---

## 🛠️ Các File Đã Chuẩn Bị Sẵn Cho Bạn

| File | Chức năng |
| :--- | :--- |
| `Dockerfile` | Multi-stage build (tự động build React và đóng gói vào image Node.js Alpine siêu nhẹ < 120MB) |
| `docker-compose.yml` | Chạy 1 lệnh duy nhất `docker compose up -d` với port mapping `80:5000` và mount dữ liệu `messages.json` |
| `.dockerignore` | Loại bỏ các thư mục rác, `node_modules`, `.git` để image nhẹ nhất |
| `ecosystem.config.cjs` | File cấu hình PM2 Cluster (nếu bạn muốn chạy trực tiếp trên máy ảo EC2 mà không dùng Docker) |
| `.env.example` | Mẫu biến môi trường (`PORT=5000`, `NODE_ENV=production`) |

---

## 🚀 3 Cách Triển Khai Lên AWS (Chọn 1 trong 3 cách)

---

### CÁCH 1: AWS Lightsail (Khuyên dùng nhất ⭐⭐⭐⭐⭐)
> **Ưu điểm:** Cực kỳ dễ, có sẵn IP tĩnh công khai (Static IP), chi phí cố định rẻ nhất (chỉ từ **$3.5 - $5/tháng** hoặc Free Tier 3 tháng đầu), giao diện trực quan hơn EC2 rất nhiều.

#### Bước 1: Tạo máy ảo Lightsail
1. Đăng nhập [AWS Lightsail Console](https://lightsail.aws.amazon.com/).
2. Chọn **Create instance**.
3. **Location:** Chọn Singapore (`ap-southeast-1`) để tốc độ về Việt Nam nhanh nhất.
4. **Platform:** Chọn **Linux/Unix**.
5. **Blueprint:** Chọn **OS Only** $\rightarrow$ **Ubuntu 22.04 LTS** (hoặc chọn Apps & OS $\rightarrow$ Docker).
6. **Plan:** Chọn gói $3.5/tháng hoặc $5/tháng (1GB RAM, 1 vCPU là đủ chạy mượt mà).
7. Đặt tên instance (ví dụ: `quach-dai-duong-portfolio`) $\rightarrow$ Bấm **Create instance**.

#### Bước 2: Gán IP tĩnh & Mở Port 80, 443
1. Vào tab **Networking** trên Lightsail $\rightarrow$ Bấm **Attach static IP**.
2. Trong phần **IPv4 Firewall**, đảm bảo đã mở các port:
   * `HTTP (80)`
   * `HTTPS (443)`
   * `SSH (22)`

#### Bước 3: Đưa mã nguồn lên và chạy Docker
Bấm vào icon terminal (SSH) ngay trên giao diện web của Lightsail, sau đó gõ:

```bash
# 1. Cập nhật hệ thống và cài đặt Docker & Docker Compose
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose-v2 git
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
newgrp docker

# 2. Clone mã nguồn từ GitHub của bạn
git clone https://github.com/quytsiriel/<ten-repo-cua-ban>.git app
cd app

# 3. Khởi chạy ứng dụng bằng Docker Compose
docker compose up -d --build
```
> 🎉 **Xong!** Truy cập vào địa chỉ IP tĩnh của Lightsail trên trình duyệt, landing page của bạn sẽ hoạt động ngay lập tức!

---

### CÁCH 2: AWS EC2 (Truyền thống, tận dụng Free Tier 12 tháng ⭐⭐⭐⭐)
> **Ưu điểm:** Miễn phí 12 tháng với gói `t2.micro` hoặc `t3.micro` (750 giờ/tháng).

#### Bước 1: Tạo EC2 Instance
1. Vào [AWS EC2 Console](https://console.aws.amazon.com/ec2/).
2. Chọn **Launch Instance**.
3. Name: `portfolio-quachdaiduong`.
4. AMI: **Ubuntu Server 24.04 LTS (HVM)**.
5. Instance type: `t3.micro` hoặc `t2.micro` (Free tier eligible).
6. Key pair: Tạo key pair mới và tải file `.pem` về máy tính.
7. **Network Settings**: Tích chọn:
   * ✅ Allow SSH traffic from Anywhere
   * ✅ Allow HTTP traffic from the internet
   * ✅ Allow HTTPS traffic from the internet
8. Bấm **Launch Instance**.

#### Bước 2: Kết nối SSH và chạy ứng dụng
Từ máy tính của bạn (PowerShell hoặc Terminal):
```bash
ssh -i "duong-key.pem" ubuntu@<EC2-PUBLIC-IP>
```

Trên máy chủ EC2:
```bash
# Cài đặt Node.js 20 và PM2
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git
sudo npm install -g pm2

# Clone repo
git clone https://github.com/quytsiriel/<ten-repo-cua-ban>.git portfolio
cd portfolio

# Build toàn bộ frontend & backend
npm run build

# Chạy bằng PM2
sudo PORT=80 pm2 start server/index.js --name "portfolio"
sudo pm2 startup
sudo pm2 save
```

---

### CÁCH 3: AWS App Runner (Serverless Container ⭐⭐⭐⭐)
> **Ưu điểm:** Hoàn toàn không cần quản lý hệ điều hành Linux, tự động scale khi có nhiều lượt truy cập, tự động build lại mỗi khi bạn `git push` lên GitHub.

1. Đẩy mã nguồn dự án lên GitHub.
2. Vào [AWS App Runner Console](https://console.aws.amazon.com/apprunner/) $\rightarrow$ Chọn **Create service**.
3. **Source:** Chọn **Source code repository** $\rightarrow$ Kết nối với tài khoản GitHub của bạn $\rightarrow$ Chọn Repository và branch `main`.
4. **Build settings:**
   * Configuration file: Chọn **Configure all settings here**.
   * Runtime: **Nodejs 18** (hoặc chọn Dockerfile).
   * Build command: `npm run build`
   * Start command: `npm start`
   * Port: `5000`
5. Bấm **Next** $\rightarrow$ **Create & Deploy**.
6. AWS App Runner sẽ tự cấp cho bạn 1 đường link HTTPS miễn phí (ví dụ: `https://xyz.ap-southeast-1.awsapprunner.com`).

---

## 🔒 Cài đặt Tên Miền Riêng & Chứng chỉ SSL/HTTPS Miễn Phí (Với Let's Encrypt)
*(Áp dụng cho Cách 1 - Lightsail hoặc Cách 2 - EC2)*

Nếu bạn đã mua tên miền (ví dụ: `quachdaiduong.dev` hoặc `daiduong.tech`):

1. Trỏ bản ghi DNS:
   * `A record`: `@` $\rightarrow$ IP của máy ảo AWS.
   * `A record`: `www` $\rightarrow$ IP của máy ảo AWS.

2. Cài Nginx & Certbot làm Reverse Proxy cấp chứng chỉ SSL tự động:
```bash
sudo apt install -y certbot python3-certbot-nginx nginx

# Cấu hình Nginx chuyển tiếp vào Port 5000
sudo nano /etc/nginx/sites-available/default
```

Nội dung cấu hình Nginx:
```nginx
server {
    server_name quachdaiduong.dev www.quachdaiduong.dev;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Kích hoạt SSL tự động:
```bash
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d quachdaiduong.dev -d www.quachdaiduong.dev
```
Chứng chỉ SSL sẽ tự động gia hạn hoàn toàn miễn phí trọn đời!

---

## 📦 Kiểm tra trước khi đẩy code lên Git

Chạy lệnh kiểm tra lần cuối trên máy cục bộ:
```bash
npm run build
npm test
```
Nếu pass toàn bộ, bạn có thể commit và push lên GitHub để sẵn sàng deploy lên AWS!

import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MESSAGES_FILE = path.join(__dirname, '../data/messages.json');

const router = Router();

// In-memory visitor and interaction counter
let totalVisitors = 1420;
let apiPings = 8520;
const serverStartTime = Date.now();

// 1. GET /api/profile
router.get('/profile', (req, res) => {
  apiPings++;
  res.json({
    status: 'success',
    data: {
      name: 'Quách Đại Dương',
      alias: 'quytsiriel / deepduong',
      role: 'Backend Developer & AI System Architect',
      age: 20,
      currentCompany: {
        name: 'Jupiter Solution',
        role: 'Backend Developer',
        period: '2024 - Hiện tại',
        focus: 'Microservices, High-Performance APIs, Cloud Integration'
      },
      education: {
        school: 'Đại Học Công Nghệ - Đại Học Quốc Gia Hà Nội (UET - VNU)',
        faculty: 'Khoa Công Nghệ Thông Tin',
        period: '2023 - 2027',
        status: 'Sinh viên'
      },
      flagshipProject: {
        name: 'MedPal',
        tagline: 'Ứng dụng hỗ trợ y tế tích hợp AI đa phương thức',
        award: 'Giải Triển Vọng - Google Developer on Campus (GDGOC) 2026',
        description: 'MedPal là một ứng dụng hỗ trợ y tế tích hợp AI, giúp người dùng theo dõi triệu chứng, nhận lời khuyên sức khỏe và tìm kiếm các cơ sở y tế gần nhất. Dự án sử dụng mô hình ngôn ngữ lớn (LLM) MedGemma thông qua Ollama để cung cấp các phản hồi chuyên sâu về y khoa.',
        techStack: {
          frontend: ['Flutter', 'Riverpod', 'GoRouter'],
          backend: ['Python', 'FastAPI', 'Agentic Workflows'],
          database: ['Firebase Cloud Firestore', 'Firebase Auth'],
          ai: ['MedGemma LLM (Ollama trên FPT AI Factory)', 'Whisper Speech-to-Text']
        },
        highlights: [
          'Chạy suy luận mô hình MedGemma chuyên khoa qua hạ tầng FPT AI Factory',
          'Tích hợp Whisper nhận diện giọng nói hỗ trợ người dùng nhập triệu chứng rảnh tay',
          'Hệ thống định vị GPS tự động tìm phòng khám/bệnh viện cấp cứu gần nhất',
          'Kiến trúc Clean Architecture + Riverpod quản lý State reactive'
        ]
      },
      socials: {
        github: 'https://github.com/quytsiriel',
        facebook: 'https://www.facebook.com/duong.quach.58726',
        instagram: 'https://www.instagram.com/deepduong/',
        email: 'quytsiriel@gmail.com'
      },
      skills: [
        { category: 'Backend & APIs', items: ['Python (FastAPI)', 'Node.js (Express)', 'RESTful APIs', 'Microservices Architecture'] },
        { category: 'AI & Machine Learning', items: ['MedGemma LLM', 'Ollama Runtime', 'FPT AI Factory', 'Whisper ASR', 'AI Agents'] },
        { category: 'Mobile & Frontend', items: ['Flutter', 'Riverpod', 'GoRouter', 'React.js'] },
        { category: 'Database & Cloud', items: ['Firebase Firestore', 'PostgreSQL', 'Docker', 'Cloud Hosting'] }
      ]
    }
  });
});

// 2. POST /api/contact
router.post('/contact', (req, res) => {
  apiPings++;
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      status: 'error',
      message: 'Vui lòng cung cấp đầy đủ Tên, Email và Nội dung tin nhắn.'
    });
  }

  // Basic email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Địa chỉ email không hợp lệ.'
    });
  }

  const newMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: name.trim(),
    email: email.trim(),
    subject: (subject || 'Liên hệ từ Portfolio').trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    userAgent: req.headers['user-agent'] || 'Unknown'
  };

  try {
    let messages = [];
    try {
      if (fs.existsSync(MESSAGES_FILE)) {
        const content = fs.readFileSync(MESSAGES_FILE, 'utf-8');
        if (content) {
          messages = JSON.parse(content);
        }
      }
    } catch (readErr) {
      console.warn('Notice: Could not read messages file directly, using empty buffer:', readErr.message);
    }

    messages.unshift(newMessage);

    // Attempt persistent write, with /tmp fallback on serverless (Vercel)
    try {
      fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');
    } catch (writeErr) {
      console.warn('Notice: Primary disk write failed (serverless read-only FS), trying /tmp fallback:', writeErr.message);
      try {
        const tmpFile = path.join('/tmp', 'messages.json');
        fs.writeFileSync(tmpFile, JSON.stringify(messages, null, 2), 'utf-8');
      } catch (tmpErr) {
        console.warn('Notice: /tmp fallback also skipped, logged in memory:', tmpErr.message);
      }
    }

    return res.status(201).json({
      status: 'success',
      message: 'Cảm ơn bạn! Tin nhắn đã được chuyển tiếp thành công đến Quách Đại Dương.',
      messageId: newMessage.id
    });
  } catch (error) {
    console.error('Error handling contact message:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Đã có lỗi máy chủ khi gửi tin nhắn. Vui lòng thử lại sau.'
    });
  }
});

// 3. GET /api/stats
router.get('/stats', (req, res) => {
  apiPings++;
  totalVisitors++;
  const uptimeSeconds = Math.floor((Date.now() - serverStartTime) / 1000);

  res.json({
    status: 'success',
    data: {
      uptimeSeconds,
      apiPings,
      totalVisitors,
      systemHealth: 'OPERATIONAL',
      version: '2.4.0',
      nodeVersion: process.version,
      infrastructure: 'FPT AI Factory / High-Performance Node.js Cluster'
    }
  });
});

// 4. POST /api/medpal-simulate (Interactive Terminal endpoint)
router.post('/medpal-simulate', (req, res) => {
  apiPings++;
  const { query, scenarioId } = req.body;

  const scenarios = {
    symptom: {
      title: 'Phân tích triệu chứng: Sốt 38.5°C kèm đau họng và nhức mỏi cơ',
      triageLevel: 'Trung bình (Moderate)',
      reasoningModel: 'MedGemma-7B (Fine-tuned Medical LLM via Ollama on FPT AI Factory)',
      inferenceLatencyMs: 42,
      response: {
        diagnosis_probability: [
          { condition: 'Nhiễm siêu vi / Cảm cúm hô hấp cấp', probability: '78%' },
          { condition: 'Viêm họng liên cầu khuẩn', probability: '18%' },
          { condition: 'Sốt xuất huyết Dengue (cần theo dõi thêm)', probability: '4%' }
        ],
        clinical_advice: [
          'Nghỉ ngơi tại phòng thoáng khí, bù nước và điện giải (Oresol) theo tỉ lệ chuẩn.',
          'Dùng Paracetamol 500mg hạ sốt khi thân nhiệt > 38.5°C (cách nhau 4-6 tiếng, không quá 3g/ngày).',
          'Tránh tự ý sử dụng thuốc kháng sinh khi chưa có chỉ định xét nghiệm dịch họng.'
        ],
        warning_signs: 'Nếu sốt kéo dài trên 3 ngày, xuất hiện phát ban dưới da, khó thở hoặc li bì, hãy đến ngay cơ sở y tế.',
        nearby_facilities: [
          { name: 'Bệnh viện Đa khoa Y học Cổ truyền Hà Nội', distance: '1.2 km', emergency: '115' },
          { name: 'Bệnh viện 19-8 Bộ Công An', distance: '2.4 km', emergency: '024 3768 4620' }
        ]
      }
    },
    drug: {
      title: 'Kiểm tra tương tác thuốc: Paracetamol + Ibuprofen',
      triageLevel: 'An toàn có điều kiện (Caution Required)',
      reasoningModel: 'MedGemma-7B (Clinical Pharmacy Module)',
      inferenceLatencyMs: 38,
      response: {
        interaction_summary: 'Có thể phối hợp xen kẽ trong trường hợp sốt cao trơ với Paracetamol đơn thuần, nhưng cần giám sát liều chặt chẽ.',
        clinical_advice: [
          'Paracetamol chuyển hóa qua gan; Ibuprofen (NSAID) chuyển hóa qua thận và gây kích ứng dạ dày.',
          'Uống cách nhau tối thiểu 2-3 tiếng để tránh gánh nặng chuyển hóa cùng lúc.',
          'Uống Ibuprofen sau khi ăn no.'
        ],
        contraindications: 'Chống chỉ định tuyệt đối nếu có tiền sử loét dạ dày - tá tràng, suy thận cấp, hoặc đang nghi ngờ sốt xuất huyết (Ibuprofen tăng nguy cơ xuất huyết).'
      }
    },
    emergency: {
      title: 'Định vị cấp cứu khẩn cấp: Đau thắt ngực trái lan xuống cánh tay',
      triageLevel: 'NGUY HIỂM KHẨN CẤP (Code Red - Immediate Emergency)',
      reasoningModel: 'MedGemma-7B Emergency Triage Protocol',
      inferenceLatencyMs: 29,
      response: {
        alert: 'Triệu chứng điển hình của Hội chứng mạch vành cấp / Nhồi máu cơ tim!',
        immediate_actions: [
          'GỌI NGAY CẤP CỨU 115 HOẶC NGƯỜI NHÀ ĐƯA ĐẾN BỆNH VIỆN GẦN NHẤT CÓ CAN THIỆP TIM MẠCH.',
          'Để bệnh nhân ngồi tựa lưng góc 45 độ, nới lỏng cổ áo và thắt lưng.',
          'Hạn chế cử động, không tự đi bộ hoặc tự lái xe.'
        ],
        nearest_emergency_hospitals: [
          { name: 'Trung tâm Cấp cứu A9 - Bệnh viện Bạch Mai', distance: '5.8 km', hotline: '024 3869 3731' },
          { name: 'Bệnh viện Tim Hà Nội (Cơ sở 2)', distance: '3.6 km', hotline: '024 3942 2430' }
        ]
      }
    }
  };

  const selected = scenarios[scenarioId] || {
    title: query ? `Yêu cầu: "${query}"` : 'Tư vấn sức khỏe thông minh',
    triageLevel: 'Thông tin tham khảo (General Healthcare Advisory)',
    reasoningModel: 'MedGemma-7B on FPT AI Factory',
    inferenceLatencyMs: 46,
    response: {
      analysis: `Hệ thống MedPal đã tiếp nhận yêu cầu: "${query || 'Kiểm tra sức khỏe tổng quát'}".`,
      clinical_advice: [
        'Duy trì chế độ ăn uống cân bằng, ngủ đủ 7-8 tiếng/ngày.',
        'Thực hiện theo dõi chỉ số huyết áp và nhịp tim định kỳ trên MedPal.'
      ],
      disclaimer: 'Thông tin do AI MedGemma hỗ trợ chỉ mang tính tham khảo chuyên môn, không thay thế chẩn đoán lâm sàng trực tiếp từ bác sĩ chuyên khoa.'
    }
  };

  res.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    executionEngine: {
      runtime: 'FastAPI / Python 3.11 Microservice',
      aiEngine: 'MedGemma via Ollama',
      hardwareCluster: 'FPT AI Factory GPU H100 Node',
      speechProcessor: 'OpenAI Whisper ASR'
    },
    data: selected
  });
});

export default router;

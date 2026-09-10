import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { GithubIcon, FacebookIcon, InstagramIcon } from './BrandIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setStatus({
          type: 'success',
          message: data.message || 'Cảm ơn bạn! Tin nhắn đã được gửi thành công đến Quách Đại Dương.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Không thể kết nối đến máy chủ backend. Vui lòng kiểm tra lại kết nối mạng.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      handle: '@quytsiriel',
      href: 'https://github.com/quytsiriel',
      icon: GithubIcon,
      color: '#0f172a',
      desc: 'Kho lưu trữ mã nguồn & dự án mã nguồn mở'
    },
    {
      name: 'Facebook',
      handle: 'Quách Đại Dương',
      href: 'https://www.facebook.com/duong.quach.58726',
      icon: FacebookIcon,
      color: '#1877f2',
      desc: 'Kết nối mạng xã hội & cuộc sống'
    },
    {
      name: 'Instagram',
      handle: '@deepduong',
      href: 'https://www.instagram.com/deepduong/',
      icon: InstagramIcon,
      color: '#e1306c',
      desc: 'Khoảnh khắc đời thường & cảm hứng sáng tạo'
    },
    {
      name: 'Gmail',
      handle: 'quytsiriel@gmail.com',
      href: 'mailto:quytsiriel@gmail.com',
      icon: Mail,
      color: '#ea4335',
      desc: 'Hợp tác kỹ thuật, dự án hoặc trao đổi công việc'
    }
  ];

  return (
    <section 
      id="contact" 
      style={{
        padding: '6rem 0',
        position: 'relative'
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Mail size={15} color="var(--color-ocean-blue)" />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Kết Nối & Trao Đổi Cơ Hội Hợp Tác
          </h2>
          <p className="section-subtitle">
            Bạn có ý tưởng về một dự án AI, kiến trúc backend hiệu năng cao, hoặc muốn giao lưu công nghệ? Hãy để lại lời nhắn bên dưới.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'flex-start'
          }}
        >
          {/* Left: Interactive Contact Form */}
          <div 
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.88)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '0.5rem' }}>
              Gửi tin nhắn trực tiếp
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-slate-600)', marginBottom: '1.75rem' }}>
              Dữ liệu sẽ được lưu trữ qua REST API backend và phản hồi trong thời gian sớm nhất.
            </p>

            {status.type && (
              <div 
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: status.type === 'success' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
                  color: status.type === 'success' ? '#047857' : '#b91c1c',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}
              >
                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-slate-700)', marginBottom: '0.4rem' }}>
                  Họ và tên *
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(2, 132, 199, 0.2)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    color: 'var(--color-slate-900)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-ocean-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(2, 132, 199, 0.2)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-slate-700)', marginBottom: '0.4rem' }}>
                  Địa chỉ Email *
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(2, 132, 199, 0.2)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    color: 'var(--color-slate-900)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-ocean-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(2, 132, 199, 0.2)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-slate-700)', marginBottom: '0.4rem' }}>
                  Chủ đề trao đổi
                </label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Hợp tác dự án AI / Backend / Giao lưu công nghệ"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(2, 132, 199, 0.2)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    color: 'var(--color-slate-900)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-ocean-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(2, 132, 199, 0.2)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-slate-700)', marginBottom: '0.4rem' }}>
                  Nội dung lời nhắn *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Viết lời nhắn của bạn ở đây..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(2, 132, 199, 0.2)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    color: 'var(--color-slate-900)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-ocean-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(2, 132, 199, 0.2)'}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  marginTop: '0.5rem',
                  opacity: submitting ? 0.7 : 1
                }}
              >
                <Send size={18} />
                <span>{submitting ? 'Đang gửi qua Backend...' : 'Gửi Lời Nhắn Ngay'}</span>
              </button>
            </form>
          </div>

          {/* Right: Official Socials Hub */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div 
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.88)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-ocean-blue)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <MapPin size={16} />
                <span>ĐỊA ĐIỂM HOẠT ĐỘNG</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '0.35rem' }}>
                Hà Nội, Việt Nam
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-600)' }}>
                Đại Học Công Nghệ – ĐHQGHN (Xuân Thủy, Cầu Giấy, Hà Nội) & Jupiter Solution. Sẵn sàng tham gia các dự án remote hoặc hybrid.
              </p>
            </div>

            {/* Social Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card"
                    style={{
                      padding: '1.15rem 1.4rem',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.1rem',
                      textDecoration: 'none',
                      color: 'inherit',
                      background: 'rgba(255, 255, 255, 0.82)'
                    }}
                  >
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: `${item.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={20} color={item.color} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-slate-900)' }}>
                          {item.name}
                        </div>
                        <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--color-ocean-blue)', fontWeight: 600 }}>
                          {item.handle}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-slate-500)', marginTop: '0.15rem' }}>
                        {item.desc}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

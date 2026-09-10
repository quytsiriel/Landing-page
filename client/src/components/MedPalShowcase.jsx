import React, { useState } from 'react';
import { HeartPulse, Cpu, Smartphone, Database, Mic, MapPin, Sparkles, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function MedPalShowcase() {
  const [activeTab, setActiveTab] = useState('overview');

  const architectureLayers = [
    {
      id: 'ai',
      name: 'Trí Tuệ Nhân Tạo (AI Engine)',
      icon: Cpu,
      color: '#06b6d4',
      badge: 'FPT AI Factory',
      description: 'Lõi xử lý y khoa sử dụng MedGemma LLM kết hợp Whisper ASR',
      details: [
        'Mô hình MedGemma chuyên ngành y khoa, triển khai qua Ollama trên cụm GPU FPT AI Factory.',
        'Mô hình Whisper chuyển giọng nói thành văn bản, hỗ trợ người già & người bệnh nhập liệu rảnh tay.',
        'Hệ thống Agentic phân loại mức độ khẩn cấp (Triage Protocol) và phát hiện triệu chứng báo động.'
      ]
    },
    {
      id: 'backend',
      name: 'Hệ Thống Backend (FastAPI)',
      icon: Sparkles,
      color: '#0284c7',
      badge: 'Python 3.11',
      description: 'Microservices hiệu năng cao cung cấp API cho ứng dụng di động',
      details: [
        'Xây dựng bằng Python FastAPI với cơ chế bất đồng bộ Asynchronous hoàn toàn.',
        'Tích hợp Agentic Orchestration điều phối truy vấn giữa LLM và cơ sở dữ liệu y tế.',
        'Kiến trúc module hóa bảo mật, tuân thủ tiêu chuẩn an toàn dữ liệu sức khỏe cá nhân.'
      ]
    },
    {
      id: 'frontend',
      name: 'Ứng Dụng Di Động (Flutter)',
      icon: Smartphone,
      color: '#2563eb',
      badge: 'Flutter & Riverpod',
      description: 'Giao diện người dùng mượt mà, phản hồi thời gian thực',
      details: [
        'Sử dụng Flutter đa nền tảng tối ưu trải nghiệm người dùng trên cả Android và iOS.',
        'Riverpod quản lý State reactive, kết hợp GoRouter cho luồng điều hướng sâu chặt chẽ.',
        'Tích hợp GPS bản đồ theo thời gian thực tìm kiếm bệnh viện/phòng khám gần nhất.'
      ]
    },
    {
      id: 'database',
      name: 'Cơ Sở Dữ Liệu (Firebase)',
      icon: Database,
      color: '#f59e0b',
      badge: 'Cloud Firestore',
      description: 'Lưu trữ đám mây phân tán và xác thực danh tính người dùng',
      details: [
        'Firebase Cloud Firestore đồng bộ hồ sơ sức khỏe và lịch sử thăm khám tức thì.',
        'Firebase Auth cung cấp bảo mật đa yếu tố và bảo vệ thông tin người dùng.'
      ]
    }
  ];

  return (
    <section 
      id="medpal" 
      style={{
        padding: '6rem 0',
        position: 'relative'
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <HeartPulse size={15} color="var(--color-rose)" />
            <span>Flagship Medical AI Project</span>
          </div>
          <h2 className="section-title">
            MedPal — Trợ Lý Y Tế Đột Phá Tích Hợp AI
          </h2>
          <p className="section-subtitle">
            Dự án đoạt <strong>Giải Triển Vọng Google Developer on Campus (GDGOC) 2026</strong>. 
            Ứng dụng hỗ trợ theo dõi triệu chứng sức khỏe, tư vấn y khoa thông minh và định vị cơ sở y tế khẩn cấp.
          </p>
        </div>

        {/* Main Split Grid Showcase */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}
        >
          {/* Left: UI Showcase with Medpal.png */}
          <div 
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 45px -10px rgba(2, 132, 199, 0.15)'
            }}
          >
            <div 
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)',
                border: '1px solid rgba(2, 132, 199, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src="/assets/Medpal.png" 
                alt="Giao diện ứng dụng MedPal"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Award Overlay Chip */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  background: 'rgba(15, 23, 42, 0.82)',
                  backdropFilter: 'blur(12px)',
                  color: '#ffffff',
                  padding: '0.75rem 1.1rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={18} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>GDGOC 2026 Prospective Award</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Google Developer on Campus Vietnam</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Features & Innovations */}
          <div>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-ocean-blue)',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '0.85rem'
              }}
            >
              <span>KIẾN TRÚC HỆ THỐNG ĐỘC BẢN</span>
            </div>

            <h3 
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--color-slate-900)',
                marginBottom: '1.25rem'
              }}
            >
              Hội tụ Sức mạnh Y học & Điện toán Trí tuệ Nhân tạo
            </h3>

            <p 
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-slate-600)',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}
            >
              MedPal giải quyết bài toán chăm sóc sức khỏe ban đầu bằng cách đưa mô hình ngôn ngữ lớn chuyên khoa <strong>MedGemma</strong> về gần gũi với người bệnh. Ứng dụng cung cấp đánh giá triệu chứng nhanh chóng, cảnh báo mức độ rủi ro và điều hướng bệnh nhân đến phòng khám phù hợp.
            </p>

            {/* 3 Core Highlight Feature Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <div 
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  borderRadius: '16px'
                }}
              >
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Cpu size={22} color="var(--color-cyan-vibrant)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '0.25rem' }}>
                    MedGemma LLM trên FPT AI Factory
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-600)' }}>
                    Chạy suy luận cục bộ bảo mật cao qua Ollama, tối ưu hóa từ điển y học lâm sàng và khuyến nghị dùng thuốc an toàn.
                  </p>
                </div>
              </div>

              <div 
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  borderRadius: '16px'
                }}
              >
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(2, 132, 199, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mic size={22} color="var(--color-ocean-blue)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '0.25rem' }}>
                    Nhập liệu giọng nói chuẩn xác với Whisper
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-600)' }}>
                    Chuyển hóa giọng nói tiếng Việt các vùng miền thành văn bản bệnh án chuẩn xác, tiện lợi tối đa cho bệnh nhân.
                  </p>
                </div>
              </div>

              <div 
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  borderRadius: '16px'
                }}
              >
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} color="#059669" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '0.25rem' }}>
                    Định vị khẩn cấp & Cơ sở Y tế gần nhất
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-600)' }}>
                    Tự động tính toán bán kính khoảng cách, kết nối hotline cấp cứu 115 và bệnh viện chuyên khoa tương ứng với chẩn đoán.
                  </p>
                </div>
              </div>
            </div>

            <a href="#terminal" className="btn-primary">
              <Sparkles size={18} />
              <span>Chạy Thử Nghiệm API MedGemma Phía Dưới</span>
            </a>
          </div>
        </div>

        {/* Deep Dive Architecture Explorer Grid */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '0.5rem' }}>
              Kiến Trúc Đa Tầng Của MedPal
            </h3>
            <p style={{ color: 'var(--color-slate-600)', fontSize: '0.98rem' }}>
              Bóc tách từng tầng công nghệ do Quách Đại Dương cùng đội ngũ kiến trúc và phát triển
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div 
                  key={layer.id}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1rem'
                      }}
                    >
                      <div 
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          background: `${layer.color}18`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={22} color={layer.color} />
                      </div>
                      <span 
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '8px',
                          background: `${layer.color}15`,
                          color: layer.color
                        }}
                      >
                        {layer.badge}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '0.5rem' }}>
                      {layer.name}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-slate-600)', marginBottom: '1.25rem' }}>
                      {layer.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {layer.details.map((detail, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--color-slate-700)' }}>
                          <CheckCircle2 size={15} color={layer.color} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

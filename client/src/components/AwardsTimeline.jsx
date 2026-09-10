import React, { useState } from 'react';
import { Award, GraduationCap, Briefcase, Calendar, ChevronRight, Maximize2, X, ExternalLink, Heart } from 'lucide-react';

export default function AwardsTimeline() {
  const [modalImage, setModalImage] = useState(null);

  const timelineItems = [
    {
      period: '2026',
      title: 'Giải Triển Vọng — Google Developer on Campus (GDGOC)',
      subtitle: 'Google Developers Community Vietnam',
      category: 'Giải thưởng Công nghệ',
      badgeColor: '#f59e0b',
      icon: Award,
      hasImage: '/assets/gdgoc-award.jpg',
      imageAlt: 'Bằng chứng nhận Giải Triển Vọng GDGOC 2026',
      description: 'Đạt Giải Triển Vọng với dự án MedPal - Nền tảng chăm sóc sức khỏe ứng dụng mô hình MedGemma và hạ tầng FPT AI Factory. Được hội đồng giám khảo Google đánh giá cao về tính ứng dụng thực tiễn và kiến trúc công nghệ tiên tiến.'
    },
    {
      period: '2024 — Hiện tại',
      title: 'Backend Developer',
      subtitle: 'Jupiter Solution',
      category: 'Kinh nghiệm Thực chiến',
      badgeColor: '#0284c7',
      icon: Briefcase,
      description: 'Phụ trách thiết kế và phát triển hệ thống backend, tối ưu hóa các API vi dịch vụ (Microservices), xây dựng pipeline dữ liệu và tích hợp giải pháp đám mây phục vụ các hệ thống nghiệp vụ quy mô lớn.'
    },
    {
      period: '2023 — 2027',
      title: 'Sinh viên Công Nghệ Thông Tin',
      subtitle: 'Trường Đại học Công nghệ — Đại học Quốc gia Hà Nội (UET - VNU)',
      category: 'Học vấn & Nghiên cứu',
      badgeColor: '#2563eb',
      icon: GraduationCap,
      description: 'Theo học chương trình đào tạo chuyên sâu về Khoa học Máy tính, cấu trúc dữ liệu, giải thuật, mạng máy tính và kỹ nghệ phần mềm tại một trong những ngôi trường công nghệ hàng đầu Việt Nam.'
    }
  ];

  return (
    <section 
      id="awards" 
      style={{
        padding: '6rem 0',
        position: 'relative'
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Award size={15} color="var(--color-amber)" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="section-title">
            Dấu Ấn Giải Thưởng & Hành Trình Phát Triển
          </h2>
          <p className="section-subtitle">
            Những cột mốc quan trọng ghi dấu nỗ lực nghiên cứu, học tập tại UET - VNU và kinh nghiệm thực chiến tại doanh nghiệp.
          </p>
        </div>

        {/* Feature Certificate Card Showcase */}
        <div 
          className="glass-card"
          style={{
            padding: '2rem',
            borderRadius: '24px',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.85) 100%)',
            border: '1px solid rgba(2, 132, 199, 0.25)',
            boxShadow: '0 20px 45px -10px rgba(2, 132, 199, 0.15)'
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left: Certificate Image with zoom trigger */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(2, 132, 199, 0.18)',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.8)'
              }}
              onClick={() => setModalImage('/assets/gdgoc-award.jpg')}
            >
              <img 
                src="/assets/gdgoc-award.jpg" 
                alt="Giải thưởng GDGOC 2026 Quách Đại Dương"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '0.75rem',
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Maximize2 size={13} />
                <span>Phóng to chứng nhận</span>
              </div>
            </div>

            {/* Right: Award Details */}
            <div>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '9999px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  color: '#b45309',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}
              >
                <Award size={15} />
                <span>GOOGLE DEVELOPER ON CAMPUS 2026</span>
              </div>

              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-slate-900)', marginBottom: '0.75rem' }}>
                Giải Triển Vọng Cuộc Thi GDGOC 2026
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-slate-600)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Sáng kiến ứng dụng y tế <strong>MedPal</strong> do Quách Đại Dương cùng các cộng sự phát triển đã xuất sắc vượt qua nhiều đội thi công nghệ để giành <strong>Giải Triển Vọng</strong> trong khuôn khổ cuộc thi do Google Developer on Campus tổ chức.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.85rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(2, 132, 199, 0.12)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-500)', fontWeight: 600 }}>TỔ CHỨC BỞI</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-slate-900)' }}>Google Developer Groups</div>
                </div>
                <div style={{ padding: '0.85rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(2, 132, 199, 0.12)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-500)', fontWeight: 600 }}>SẢN PHẨM DỰ THI</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-ocean-blue)' }}>MedPal (AI Healthcare)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Flow Cards */}
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {timelineItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem'
                }}
              >
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    background: `${item.badgeColor}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={24} color={item.badgeColor} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-slate-900)' }}>
                      {item.title}
                    </h4>
                    <span 
                      style={{
                        padding: '0.25rem 0.7rem',
                        borderRadius: '9999px',
                        background: 'rgba(2, 132, 199, 0.08)',
                        color: 'var(--color-ocean-blue)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-ocean-blue)', marginBottom: '0.75rem' }}>
                    {item.subtitle}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--color-slate-600)', lineHeight: 1.65 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Life & Inspiration card featuring couple photo */}
          <div 
            className="glass-card"
            style={{
              padding: '1.5rem 1.75rem',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(254, 242, 242, 0.7) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(244, 63, 94, 0.2)'
                }}
              >
                <img 
                  src="/assets/couple.jpg" 
                  alt="Khoảnh khắc đời thường Quách Đại Dương"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-rose)', fontSize: '0.85rem', fontWeight: 700 }}>
                  <Heart size={14} />
                  <span>CÂN BẰNG CUỘC SỐNG & NGUỒN CẢM HỨNG</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-slate-900)' }}>
                  Hậu phương vững chắc & Năng lượng tích cực
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-600)' }}>
                  Đằng sau những dòng code backend và dự án AI luôn là sự đồng hành, sẻ chia và niềm vui cuộc sống.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Lightbox for Certificate */}
        {modalImage && (
          <div 
            onClick={() => setModalImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(16px)',
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
              }}
            >
              <button
                onClick={() => setModalImage(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: 'none',
                  color: '#ffffff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
              <img 
                src={modalImage} 
                alt="Enlarged Certificate" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

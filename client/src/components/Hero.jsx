import React, { useState } from 'react';
import { Sparkles, ArrowRight, Terminal, Award, Briefcase, GraduationCap, Code2, HeartPulse } from 'lucide-react';

export default function Hero() {
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardRotate({
      x: -(y / 20),
      y: x / 20
    });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
  };

  return (
    <section 
      id="about" 
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="section-container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Bio & Core Pitch */}
          <div>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(2, 132, 199, 0.08)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                color: 'var(--color-ocean-blue)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '1.25rem'
              }}
            >
              <Sparkles size={16} color="var(--color-cyan-vibrant)" />
              <span>AI & BACKEND SYSTEM ARCHITECT</span>
            </div>

            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-slate-900)',
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              Xin chào, tôi là <br />
              <span className="gradient-title">Quách Đại Dương</span>
            </h1>

            <p 
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-slate-600)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              Kỹ sư <strong>Backend Developer</strong> (20 tuổi) tại <strong>Jupiter Solution</strong> và sinh viên khoa CNTT trường <strong>Đại Học Công Nghệ – ĐHQGHN (UET - VNU)</strong>. 
              Chuyên sâu xây dựng kiến trúc Microservices, API hiệu năng cao và giải pháp trí tuệ nhân tạo y tế với dự án tiêu biểu <strong>MedPal</strong>.
            </p>

            {/* Quick Badges Highlight */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                marginBottom: '2.5rem'
              }}
            >
              <div className="badge-tech">
                <Briefcase size={14} color="var(--color-ocean-blue)" />
                <span>Backend Dev @ Jupiter Solution</span>
              </div>
              <div className="badge-tech">
                <GraduationCap size={14} color="var(--color-ocean-blue)" />
                <span>UET - VNU Hanoi</span>
              </div>
              <div className="badge-tech">
                <Award size={14} color="var(--color-amber)" />
                <span>Giải Triển Vọng GDGOC 2026</span>
              </div>
              <div className="badge-tech">
                <HeartPulse size={14} color="var(--color-rose)" />
                <span>MedPal AI Creator</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <a href="#medpal" className="btn-primary">
                <span>Khám phá Dự án MedPal</span>
                <ArrowRight size={18} />
              </a>

              <a href="#terminal" className="btn-secondary">
                <Terminal size={18} color="var(--color-ocean-blue)" />
                <span>Thử nghiệm Live Terminal</span>
              </a>
            </div>

            {/* Micro Stats Bar */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(2, 132, 199, 0.12)'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-slate-900)' }}>
                  GDGOC '26
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)' }}>Giải Triển Vọng</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-ocean-blue)' }}>
                  FastAPI & Flutter
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)' }}>Core Tech Stack</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-cyan-vibrant)' }}>
                  FPT AI
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)' }}>Factory MedGemma</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Portrait Card */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              perspective: '1000px'
            }}
          >
            <div 
              className="glass-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                maxWidth: '430px',
                width: '100%',
                padding: '1.25rem',
                borderRadius: '28px',
                background: 'rgba(255, 255, 255, 0.82)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 25px 50px -12px rgba(2, 132, 199, 0.2), 0 0 1px 1px rgba(255, 255, 255, 0.9) inset',
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transition: 'transform 0.15s ease-out',
                position: 'relative'
              }}
            >
              {/* Actual Portrait Photo with high-tech framing */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--gradient-ocean)',
                  boxShadow: '0 8px 24px rgba(2, 132, 199, 0.15)'
                }}
              >
                <img 
                  src="/assets/avatar.jpg" 
                  alt="Quách Đại Dương"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Cybernetic HUD Frame overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '20px',
                    pointerEvents: 'none'
                  }}
                />

                {/* Live System Status Chip inside image */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(10px)',
                    color: '#ffffff',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 8px #06b6d4' }} />
                  <span>ONLINE // HANOI_VN</span>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div 
                style={{
                  marginTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.25rem 0.5rem'
                }}
              >
                <div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-slate-900)' }}>
                    Quách Đại Dương
                  </h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-ocean-blue)', fontWeight: 600 }}>
                    @quytsiriel
                  </p>
                </div>

                <div 
                  style={{
                    padding: '0.45rem 0.9rem',
                    borderRadius: '12px',
                    background: 'rgba(2, 132, 199, 0.08)',
                    border: '1px solid rgba(2, 132, 199, 0.2)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--color-ocean-blue)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  UET_VNU
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

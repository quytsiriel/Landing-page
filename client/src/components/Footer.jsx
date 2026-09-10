import React, { useState, useEffect } from 'react';
import { Cpu, Heart, Shield, Activity, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [stats, setStats] = useState({
    systemHealth: 'OPERATIONAL',
    apiPings: 8520,
    totalVisitors: 1420
  });

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setStats(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid rgba(2, 132, 199, 0.12)',
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        padding: '3rem 0 2rem 0',
        marginTop: '4rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="section-container">
        {/* Top Footer: Brand & Quick Telemetry */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(2, 132, 199, 0.08)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--gradient-ocean)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Cpu size={16} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem' }}>
                Quách Đại Dương
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)' }}>
              Backend Developer @ Jupiter Solution • Sinh viên ĐH Công Nghệ - ĐHQGHN (UET - VNU)
            </p>
          </div>

          {/* Telemetry pill */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#059669',
                fontWeight: 600
              }}
            >
              <Activity size={13} />
              <span>CLUSTER: {stats.systemHealth || 'OPERATIONAL'}</span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Cuộn lên đầu trang"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(2, 132, 199, 0.2)',
                color: 'var(--color-ocean-blue)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(2, 132, 199, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(2, 132, 199, 0.1)';
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Footer Copyright & Stack Details */}
        <div 
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--color-slate-500)'
          }}
        >
          <div>
            © 2026 Quách Đại Dương. Thiết kế theo tiêu chuẩn Crystal Glassmorphism & High-Tech 2026.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            <span>Node.js / Express</span>
            <span>•</span>
            <span>React / Vite</span>
            <span>•</span>
            <span>FPT AI Factory MedGemma</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

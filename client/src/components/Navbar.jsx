import React, { useState, useEffect } from 'react';
import { Terminal, Award, FolderHeart, Mail, Sparkles, Menu, X, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Về tôi', href: '#about', icon: Cpu },
    { label: 'Dự án MedPal', href: '#medpal', icon: FolderHeart },
    { label: 'Interactive Terminal', href: '#terminal', icon: Terminal },
    { label: 'Giải thưởng', href: '#awards', icon: Award },
    { label: 'Kỹ năng', href: '#skills', icon: Sparkles },
    { label: 'Liên hệ', href: '#contact', icon: Mail }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem'
      }}
    >
      <nav 
        style={{
          width: '100%',
          maxWidth: '1100px',
          background: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: scrolled 
            ? '0 12px 36px -4px rgba(2, 132, 199, 0.12), 0 0 1px 1px rgba(255, 255, 255, 0.9) inset'
            : '0 8px 24px -4px rgba(2, 132, 199, 0.06), 0 0 1px 1px rgba(255, 255, 255, 0.8) inset',
          borderRadius: '9999px',
          padding: '0.65rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#about" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--color-slate-900)'
          }}
        >
          <div 
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--gradient-ocean)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 2px 10px rgba(6, 182, 212, 0.4)'
            }}
          >
            <Cpu size={19} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
              QD<span style={{ color: 'var(--color-ocean-blue)' }}>.dev</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div 
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '9999px',
                  color: 'var(--color-slate-700)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-ocean-blue)';
                  e.currentTarget.style.background = 'rgba(2, 132, 199, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-slate-700)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Icon size={15} style={{ opacity: 0.8 }} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Live Status Badge & GitHub Quick Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div 
            className="status-indicator"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#047857'
            }}
          >
            <span 
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981',
                display: 'inline-block'
              }} 
            />
            <span className="status-text">Ready to Build</span>
          </div>

          <a 
            href="https://github.com/quytsiriel" 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub Profile"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-slate-800)',
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(2, 132, 199, 0.15)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.color = 'var(--color-ocean-blue)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.color = 'var(--color-slate-800)';
            }}
          >
            <GithubIcon size={18} />
          </a>

          {/* Mobile menu trigger */}
          <button
            className="mobile-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-slate-800)',
              padding: '0.25rem'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '4.5rem',
            left: '1rem',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(20px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            boxShadow: '0 20px 40px rgba(2, 132, 199, 0.15)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            zIndex: 99
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-slate-800)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  background: 'rgba(248, 250, 252, 0.8)'
                }}
              >
                <Icon size={18} color="var(--color-ocean-blue)" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-trigger {
            display: flex !important;
          }
          .status-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

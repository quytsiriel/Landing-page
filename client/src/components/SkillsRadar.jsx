import React from 'react';
import { Cpu, Server, Code, Database, Cloud, Shield, Layers, Terminal } from 'lucide-react';

export default function SkillsRadar() {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      icon: Server,
      color: '#0284c7',
      skills: [
        { name: 'Python (FastAPI)', level: '95%', desc: 'Async RESTful APIs, High throughput, Pydantic' },
        { name: 'Node.js (Express)', level: '90%', desc: 'Event-driven server, Middleware, Microservices' },
        { name: 'Microservices & Clean Architecture', level: '88%', desc: 'Domain-Driven Design, Loose coupling' },
        { name: 'API Security & Rate Limiting', level: '85%', desc: 'JWT, OAuth2, Session management, CORS' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Cpu,
      color: '#06b6d4',
      badge: 'FPT AI Factory',
      skills: [
        { name: 'MedGemma LLM Inference', level: '92%', desc: 'Fine-tuned medical knowledge inference via Ollama' },
        { name: 'Whisper Speech-to-Text', level: '88%', desc: 'Automated Vietnamese voice medical transcription' },
        { name: 'Agentic Workflows', level: '85%', desc: 'Autonomous triage orchestration & tool calling' },
        { name: 'Prompt Engineering & RAG', level: '87%', desc: 'Clinical context injection & hallucination reduction' }
      ]
    },
    {
      title: 'Mobile & Fullstack',
      icon: Code,
      color: '#2563eb',
      skills: [
        { name: 'Flutter (Dart)', level: '90%', desc: 'Cross-platform mobile apps for Android & iOS' },
        { name: 'Riverpod State Management', level: '92%', desc: 'Reactive, compile-safe state architecture' },
        { name: 'GoRouter Deep-linking', level: '88%', desc: 'Robust multi-route mobile navigation' },
        { name: 'React & Modern Frontend', level: '85%', desc: 'Component architecture, Vite, Responsive UI' }
      ]
    },
    {
      title: 'Database & Cloud Infrastructure',
      icon: Cloud,
      color: '#10b981',
      skills: [
        { name: 'Firebase (Cloud Firestore & Auth)', level: '90%', desc: 'Realtime NoSQL sync, User security rules' },
        { name: 'Relational DBs (PostgreSQL)', level: '85%', desc: 'Schema design, indexing, transactions' },
        { name: 'Docker & Containerization', level: '82%', desc: 'Consistent deployment, GPU container runtime' },
        { name: 'Git & CI/CD Pipelines', level: '88%', desc: 'Version control, automated build & testing' }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      style={{
        padding: '6rem 0',
        position: 'relative'
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Layers size={15} color="var(--color-ocean-blue)" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="section-title">
            Năng Lực Kỹ Thuật & Công Nghệ Cốt Lõi
          </h2>
          <p className="section-subtitle">
            Hệ sinh thái kỹ năng chuyên sâu của một Backend Developer đam mê kiến tạo hạ tầng vững chắc và làm chủ các công nghệ AI tiên tiến.
          </p>
        </div>

        {/* Skills Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Card Title */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: `${cat.color}18`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} color={cat.color} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-slate-900)' }}>
                      {cat.title}
                    </h3>
                  </div>

                  {cat.badge && (
                    <span 
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: `${cat.color}15`,
                        color: cat.color
                      }}
                    >
                      {cat.badge}
                    </span>
                  )}
                </div>

                {/* Skill Items with Meter Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-slate-800)' }}>
                          {skill.name}
                        </span>
                        <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: cat.color }}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress Bar with Crystalline Glow */}
                      <div 
                        style={{
                          width: '100%',
                          height: '6px',
                          borderRadius: '9999px',
                          background: 'rgba(2, 132, 199, 0.08)',
                          overflow: 'hidden',
                          marginBottom: '0.35rem'
                        }}
                      >
                        <div 
                          style={{
                            width: skill.level,
                            height: '100%',
                            borderRadius: '9999px',
                            background: `linear-gradient(90deg, ${cat.color} 0%, var(--color-cyan-vibrant) 100%)`,
                            boxShadow: `0 0 10px ${cat.color}66`
                          }}
                        />
                      </div>

                      <p style={{ fontSize: '0.8rem', color: 'var(--color-slate-500)', lineHeight: 1.4 }}>
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

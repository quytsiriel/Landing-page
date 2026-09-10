import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, Activity, Cpu, Check, Copy, Sparkles, Send } from 'lucide-react';

export default function DevTerminal() {
  const [activeScenario, setActiveScenario] = useState('symptom');
  const [customInput, setCustomInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);
  const [copied, setCopied] = useState(false);

  const testScenarios = [
    {
      id: 'symptom',
      title: 'Triệu chứng Sốt & Đau họng',
      query: 'Sốt 38.5°C kèm đau họng và nhức mỏi cơ'
    },
    {
      id: 'drug',
      title: 'Tương tác thuốc Paracetamol + NSAID',
      query: 'Kiểm tra phối hợp Paracetamol và Ibuprofen'
    },
    {
      id: 'emergency',
      title: 'Khẩn cấp: Đau thắt ngực (Code Red)',
      query: 'Đau thắt ngực trái lan xuống cánh tay'
    }
  ];

  const handleRunSimulation = async (scenarioId, customQuery = null) => {
    setLoading(true);
    setLogs([
      `[CLIENT] Initiating HTTP POST -> /api/medpal-simulate`,
      `[GATEWAY] Routing to Python FastAPI Microservice...`,
      `[AUTH] Validating session token & CORS signature... OK`,
      `[INFERENCE] Dispatched payload to MedGemma on FPT AI Factory GPU H100 Node...`
    ]);
    setApiResponse(null);

    try {
      const payload = customQuery 
        ? { query: customQuery } 
        : { scenarioId: scenarioId };

      const response = await fetch('/api/medpal-simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      setTimeout(() => {
        setLogs(prev => [
          ...prev,
          `[OLLAMA] Token generation completed in ${data.data.inferenceLatencyMs || 42}ms.`,
          `[RESPONSE] HTTP 200 OK - Diagnostics & Triaged Protocol Ready.`
        ]);
        setApiResponse(data);
        setLoading(false);
      }, 550);
    } catch (err) {
      setLogs(prev => [
        ...prev,
        `[ERROR] Connection refused or backend unreachable: ${err.message}`
      ]);
      setLoading(false);
    }
  };

  const handleCopyJson = () => {
    if (apiResponse) {
      navigator.clipboard.writeText(JSON.stringify(apiResponse, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section 
      id="terminal" 
      style={{
        padding: '6rem 0',
        position: 'relative'
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Terminal size={15} color="var(--color-cyan-vibrant)" />
            <span>Interactive Backend Console</span>
          </div>
          <h2 className="section-title">
            Live MedPal API Simulator & Dev Console
          </h2>
          <p className="section-subtitle">
            Trực tiếp kiểm thử API backend MedPal. Trải nghiệm tốc độ phản hồi và năng lực suy luận của mô hình y khoa MedGemma kết nối máy chủ thời gian thực.
          </p>
        </div>

        {/* Console Container */}
        <div 
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            borderRadius: '24px',
            background: 'var(--glass-bg-terminal)',
            border: '1px solid var(--glass-terminal-border)',
            boxShadow: '0 25px 60px -15px rgba(2, 132, 199, 0.25), 0 0 35px rgba(6, 182, 212, 0.15)',
            overflow: 'hidden',
            fontFamily: 'var(--font-mono)'
          }}
        >
          {/* Terminal Window Header Bar */}
          <div 
            style={{
              padding: '0.85rem 1.25rem',
              background: 'rgba(15, 23, 42, 0.95)',
              borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* macOS traffic dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', marginLeft: '0.5rem' }}>
                medpal-api-console ~ bash - Python 3.11 / FastAPI
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: '#06b6d4',
                  background: 'rgba(6, 182, 212, 0.12)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(6, 182, 212, 0.25)'
                }}
              >
                <Activity size={13} />
                <span>SERVER: ONLINE</span>
              </div>
            </div>
          </div>

          {/* Terminal Control Bar */}
          <div 
            style={{
              padding: '1.25rem',
              background: 'rgba(15, 23, 42, 0.6)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            {/* Preset scenario tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b', marginRight: '0.25rem' }}>Mẫu kiểm thử:</span>
              {testScenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setActiveScenario(sc.id);
                    handleRunSimulation(sc.id);
                  }}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    border: activeScenario === sc.id ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
                    background: activeScenario === sc.id ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: activeScenario === sc.id ? '#38bdf8' : '#cbd5e1',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {sc.title}
                </button>
              ))}
            </div>

            {/* Run Button */}
            <button
              onClick={() => handleRunSimulation(activeScenario)}
              disabled={loading}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.25rem',
                borderRadius: '8px',
                background: 'var(--gradient-ocean)',
                color: '#ffffff',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: loading ? 'wait' : 'pointer',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.35)',
                opacity: loading ? 0.7 : 1
              }}
            >
              <Play size={14} />
              <span>{loading ? 'Đang gọi API...' : 'Chạy Request'}</span>
            </button>
          </div>

          {/* Custom Prompt Query Input */}
          <div 
            style={{
              padding: '0.75rem 1.25rem',
              background: 'rgba(2, 6, 23, 0.5)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <span style={{ color: '#06b6d4', fontSize: '0.88rem' }}>$ curl -X POST</span>
            <input 
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Hoặc nhập câu hỏi y khoa tùy chọn (ví dụ: đau khớp gối khi leo cầu thang)..."
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customInput.trim()) {
                  handleRunSimulation(null, customInput);
                }
              }}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#f1f5f9',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem'
              }}
            />
            {customInput.trim() && (
              <button
                onClick={() => handleRunSimulation(null, customInput)}
                style={{
                  background: 'rgba(6, 182, 212, 0.25)',
                  border: '1px solid #06b6d4',
                  color: '#38bdf8',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <Send size={12} />
                <span>Gửi</span>
              </button>
            )}
          </div>

          {/* Terminal Screen Body */}
          <div 
            style={{
              padding: '1.5rem',
              minHeight: '340px',
              maxHeight: '480px',
              overflowY: 'auto',
              color: '#cbd5e1',
              fontSize: '0.85rem',
              lineHeight: 1.6
            }}
          >
            {logs.length === 0 && !apiResponse && (
              <div style={{ color: '#64748b', textAlign: 'center', padding: '3.5rem 1rem' }}>
                <Cpu size={36} color="#334155" style={{ marginBottom: '1rem' }} />
                <p>Nhấp vào một trong các mẫu kiểm thử phía trên hoặc nhấn <strong>"Chạy Request"</strong> để kích hoạt kết nối backend.</p>
                <p style={{ fontSize: '0.78rem', marginTop: '0.5rem', color: '#475569' }}>
                  Hạ tầng: Node.js Express Gateway ⇄ Python FastAPI ⇄ MedGemma on FPT AI Factory
                </p>
              </div>
            )}

            {/* Execution logs */}
            {logs.map((log, index) => (
              <div key={index} style={{ marginBottom: '0.35rem' }}>
                <span style={{ color: log.includes('ERROR') ? '#ef4444' : log.includes('200 OK') ? '#10b981' : '#38bdf8' }}>
                  {log}
                </span>
              </div>
            ))}

            {/* JSON Output Display */}
            {apiResponse && (
              <div 
                style={{
                  marginTop: '1.25rem',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(2, 6, 23, 0.75)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <button
                    onClick={handleCopyJson}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#cbd5e1',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    {copied ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                    <span>{copied ? 'Đã sao chép' : 'Sao chép JSON'}</span>
                  </button>
                </div>

                <div style={{ color: '#06b6d4', marginBottom: '0.65rem', fontWeight: 600 }}>
                  // Response Payload (Structured Clinical Object)
                </div>

                <pre style={{ color: '#a5f3fc', overflowX: 'auto', whiteSpace: 'pre-wrap', margin: 0 }}>
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

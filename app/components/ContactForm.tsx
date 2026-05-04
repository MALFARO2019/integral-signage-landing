'use client';

import { useState } from 'react';

interface ContactFormProps {
  apiUrl: string;
}

export default function ContactForm({ apiUrl }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    try {
      const res = await fetch(`${apiUrl}/support/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing_enterprise' }),
      });

      if (!res.ok) throw new Error('Error al enviar');
      setStatus('sent');

      // GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'enterprise_contact', {
          event_category: 'conversion',
          event_label: form.company || form.email,
        });
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: '12px 16px',
    color: '#e2e8f0',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 13, fontWeight: 500, color: '#94a3b8', marginBottom: 6,
  };

  if (status === 'sent') {
    return (
      <div className="glass" style={{ padding: '48px 40px', borderRadius: 20, textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>¡Mensaje recibido!</h3>
        <p style={{ color: '#94a3b8', fontSize: 15 }}>
          Nos pondremos en contacto contigo en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass" style={{ padding: '40px', borderRadius: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div>
          <label style={labelStyle}>Nombre *</label>
          <input style={inputStyle} value={form.name} onChange={e => set('name', e.target.value)}
            placeholder="Juan García" required />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input style={inputStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)}
            placeholder="juan@empresa.com" required />
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Empresa</label>
        <input style={inputStyle} value={form.company} onChange={e => set('company', e.target.value)}
          placeholder="Nombre de tu empresa u organización" />
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={labelStyle}>¿Cómo podemos ayudarte? *</label>
        <textarea
          style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
          value={form.message}
          onChange={e => set('message', e.target.value)}
          placeholder="Cuéntanos sobre tus necesidades: número de pantallas, sucursales, integraciones especiales..."
          required
        />
      </div>

      {status === 'error' && (
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#ef4444', marginBottom: 16 }}>
          Hubo un error al enviar. Por favor intenta nuevamente o escríbenos a ventas@kastio.io
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px 24px', opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Enviando...' : '📩 Enviar mensaje'}
      </button>

      <p style={{ fontSize: 12, color: '#475569', textAlign: 'center', marginTop: 12 }}>
        O escríbenos directamente a{' '}
        <a href="mailto:ventas@kastio.io" style={{ color: '#818cf8' }}>ventas@kastio.io</a>
      </p>
    </form>
  );
}

import Link from 'next/link';

/* ═══════════════════════════════════════════════════
   INTEGRAL SIGNAGE — LANDING PAGE
   integralsignage.io
   ═══════════════════════════════════════════════════ */

/* ─── Navbar ─── */
function Navbar() {
  return (
    <nav className="glass" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '14px 40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, fontWeight: 800,
        }}>IS</div>
        <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em' }}>
          Integral <span style={{ color: '#818cf8' }}>Signage</span>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <a href="#features" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Features</a>
        <a href="#pricing" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Precios</a>
        <a href="#industries" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Industrias</a>
        <a href="https://app.integralsignage.io/login" className="btn-secondary" style={{ padding: '8px 20px', fontSize: 13 }}>Iniciar sesión</a>
        <a href="#pricing" className="btn-primary" style={{ padding: '8px 20px', fontSize: 13, boxShadow: 'none' }}>Prueba gratis</a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="grid-bg" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', paddingTop: 120,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)',
        top: -200, right: -100, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)',
        bottom: -100, left: -50, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: 100, padding: '6px 16px', fontSize: 13, color: '#818cf8',
          fontWeight: 600, marginBottom: 24,
        }}>
          ✨ Plataforma todo-en-uno para Digital Signage & Audio
        </div>

        <h1 className="section-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: 20 }}>
          Transforma tus pantallas en
          <br />
          <span className="gradient-text">experiencias memorables</span>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#94a3b8', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Administra video, audio ambiental y contenido interactivo desde una sola plataforma.
          Sin complicaciones. Sin contratos. Resultados reales.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#pricing" className="btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>
            🚀 Empieza gratis
          </a>
          <a href="#features" className="btn-secondary" style={{ fontSize: 16, padding: '16px 36px' }}>
            Ver cómo funciona →
          </a>
        </div>

        <p style={{ marginTop: 16, fontSize: 12, color: '#64748b' }}>
          Sin tarjeta de crédito • 14 días gratis • Configura en 5 minutos
        </p>
      </div>

      {/* Dashboard preview placeholder */}
      <div className="animate-pulse-glow" style={{
        marginTop: 60, width: '90%', maxWidth: 1000,
        aspectRatio: '16/9',
        background: 'linear-gradient(135deg, rgba(20,20,50,0.8), rgba(30,30,60,0.5))',
        borderRadius: 20, border: '1px solid rgba(99,102,241,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#64748b', fontSize: 14,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>📺</div>
          <p>Vista previa del Dashboard</p>
          <p style={{ fontSize: 12, marginTop: 4 }}>Tu contenido, tus pantallas, tu control</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Logo Belt ─── */
function LogoBelt() {
  const logos = ['🍗 Rostipollos', '🏪 RetailCo', '🏥 Hospital Nacional', '🏢 OfiPark', '🎓 Universidad'];
  return (
    <section style={{ padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <p style={{ textAlign: 'center', fontSize: 12, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, marginBottom: 24 }}>
        Empresas que confían en nosotros
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
        {logos.map(l => (
          <span key={l} style={{ fontSize: 16, color: '#475569', fontWeight: 500, letterSpacing: '-0.01em' }}>{l}</span>
        ))}
      </div>
    </section>
  );
}

/* ─── Features ─── */
function Features() {
  const features = [
    {
      icon: '📺',
      title: 'Video Signage',
      desc: 'Gestiona contenido visual en todas tus pantallas. Sube videos, imágenes y diseña playlists profesionales desde el navegador.',
      color: '#6366f1',
    },
    {
      icon: '🎵',
      title: 'Audio & Música',
      desc: 'Control total del audio ambiental. Programa música por horario, zona y localidad. Integración con Spotify y bibliotecas propias.',
      color: '#22c55e',
    },
    {
      icon: '📊',
      title: 'Monitoreo en Tiempo Real',
      desc: 'Dashboard con estado de dispositivos, alertas inteligentes, prueba de reproducción y métricas de uptime.',
      color: '#f59e0b',
    },
    {
      icon: '🎨',
      title: 'Editor Visual',
      desc: 'Diseña pantallas multi-zona sin código. Arrastra y suelta contenido, programa transiciones y previsualiza en vivo.',
      color: '#ec4899',
    },
    {
      icon: '📱',
      title: 'Multi-Plataforma',
      desc: 'Players nativos para Android, Windows y Smart TVs. Sincronización automática y actualizaciones OTA.',
      color: '#3b82f6',
    },
    {
      icon: '🏢',
      title: 'Multi-Local',
      desc: 'Administra sucursales, zonas y grupos desde un solo panel. Programaciones específicas por localidad.',
      color: '#8b5cf6',
    },
  ];

  return (
    <section id="features" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 className="section-title">Todo lo que necesitas,<br /><span className="gradient-text">nada que te sobre</span></h2>
        <p className="section-subtitle">Una plataforma unificada para video, audio y contenido interactivo.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
        {features.map(f => (
          <div key={f.title} className="glass" style={{
            padding: 32, borderRadius: 20, transition: 'all 0.3s ease',
            cursor: 'default', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -20, right: -20, width: 100, height: 100,
              borderRadius: '50%', background: `radial-gradient(circle, ${f.color}15, transparent)`,
            }} />
            <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>{f.title}</h3>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── How it Works ─── */
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Regístrate', desc: 'Crea tu cuenta gratis en 30 segundos. Sin tarjeta de crédito.', icon: '✍️' },
    { num: '02', title: 'Sube contenido', desc: 'Arrastra videos, imágenes o usa nuestros templates profesionales.', icon: '📤' },
    { num: '03', title: 'Publica', desc: 'Envía contenido a tus pantallas con un clic. Cambios en tiempo real.', icon: '🚀' },
  ];

  return (
    <section style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 className="section-title">Configura en <span className="gradient-text">3 pasos</span></h2>
        <p className="section-subtitle">De cero a pantallas publicadas en minutos.</p>
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
        {steps.map(s => (
          <div key={s.num} style={{
            flex: '1 1 240px', maxWidth: 280,
            textAlign: 'center', padding: 32,
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
              border: '1px solid rgba(99,102,241,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32,
            }}>
              {s.icon}
            </div>
            <div style={{ fontSize: 11, color: '#6366f1', fontWeight: 700, marginBottom: 8, letterSpacing: '0.1em' }}>
              PASO {s.num}
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Industries ─── */
function Industries() {
  const industries = [
    { icon: '🍔', title: 'Restaurantes & QSR', desc: 'Menús digitales, promociones de temporada y audio ambiental automatizado.' },
    { icon: '🛍️', title: 'Retail', desc: 'Pantallas de vitrina, precios dinámicos y campañas por tienda.' },
    { icon: '🏥', title: 'Salud', desc: 'Señalización de salas, turnos y contenido informativo para pacientes.' },
    { icon: '🏢', title: 'Corporativo', desc: 'Comunicados internos, salas de reunión y dashboards operativos.' },
    { icon: '🎓', title: 'Educación', desc: 'Información de campus, horarios y eventos en tiempo real.' },
    { icon: '🏨', title: 'Hospitality', desc: 'Información de huéspedes, F&B digital y ambiente sonoro personalizado.' },
  ];

  return (
    <section id="industries" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 className="section-title">Diseñado para <span className="gradient-text">tu industria</span></h2>
        <p className="section-subtitle">Soluciones que se adaptan a cada tipo de negocio.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
        {industries.map(ind => (
          <div key={ind.title} style={{
            padding: '24px 28px', borderRadius: 16,
            background: 'rgba(20,20,40,0.3)', border: '1px solid rgba(255,255,255,0.04)',
            display: 'flex', gap: 16, alignItems: 'flex-start',
            transition: 'all 0.3s ease', cursor: 'default',
          }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>{ind.icon}</span>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{ind.title}</h4>
              <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{ind.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      desc: 'Ideal para negocios pequeños',
      highlight: false,
      features: ['Hasta 10 dispositivos', '20 GB almacenamiento', '3 usuarios', 'Soporte por email'],
    },
    {
      name: 'Pro',
      desc: 'Para cadenas medianas',
      highlight: true,
      features: ['Hasta 50 dispositivos', '100 GB almacenamiento', '10 usuarios', 'Audio multi-zona', 'Soporte prioritario', 'Editor Visual'],
    },
    {
      name: 'Enterprise',
      desc: 'Solución a medida',
      highlight: false,
      features: ['Dispositivos ilimitados', 'Storage ilimitado', 'Usuarios ilimitados', 'SLA dedicado', 'Onboarding personalizado', 'API completa'],
    },
  ];

  return (
    <section id="pricing" style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 className="section-title">Planes <span className="gradient-text">flexibles</span></h2>
        <p className="section-subtitle">Empieza gratis y escala cuando necesites. Sin sorpresas.</p>
      </div>

      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
        {plans.map(plan => (
          <div key={plan.name} style={{
            flex: '1 1 300px', maxWidth: 340,
            padding: 32, borderRadius: 20,
            background: plan.highlight
              ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.06))'
              : 'rgba(20,20,40,0.4)',
            border: plan.highlight
              ? '2px solid rgba(99,102,241,0.3)'
              : '1px solid rgba(255,255,255,0.06)',
            position: 'relative',
            transition: 'all 0.3s ease',
          }}>
            {plan.highlight && (
              <div style={{
                position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                padding: '4px 16px', borderRadius: 20,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
              }}>
                MÁS POPULAR
              </div>
            )}

            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, marginTop: plan.highlight ? 8 : 0 }}>{plan.name}</h3>
            <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 20 }}>{plan.desc}</p>

            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 14, color: '#64748b' }}>Precio configurable</span>
            </div>

            <ul style={{ listStyle: 'none', marginBottom: 28 }}>
              {plan.features.map(f => (
                <li key={f} style={{ padding: '6px 0', fontSize: 14, color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#22c55e', fontSize: 14 }}>✓</span> {f}
                </li>
              ))}
            </ul>

            <a href="#" className={plan.highlight ? 'btn-primary' : 'btn-secondary'}
               style={{ width: '100%', justifyContent: 'center', boxShadow: plan.highlight ? 'none' : undefined }}>
              {plan.name === 'Enterprise' ? 'Contáctanos' : 'Empezar gratis'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonial ─── */
function Testimonial() {
  return (
    <section style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
      <div className="glass" style={{ padding: '48px 40px', borderRadius: 24 }}>
        <div style={{ fontSize: 48, marginBottom: 20 }}>🍗</div>
        <blockquote style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 500, lineHeight: 1.6, fontStyle: 'italic', marginBottom: 24, color: '#cbd5e1' }}>
          &ldquo;Integral Signage nos permitió centralizar la gestión de pantallas y audio en todas nuestras 
          sucursales. Antes usábamos USBs y ahora todo se actualiza en tiempo real desde el navegador.&rdquo;
        </blockquote>
        <div>
          <p style={{ fontWeight: 700, fontSize: 15 }}>Rostipollos</p>
          <p style={{ fontSize: 13, color: '#64748b' }}>Primeros clientes — 12 dispositivos en 6 sucursales</p>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Final ─── */
function CTAFinal() {
  return (
    <section style={{
      textAlign: 'center', padding: '80px 24px',
      background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.05))',
    }}>
      <h2 className="section-title" style={{ marginBottom: 16 }}>
        ¿Listo para <span className="gradient-text">transformar</span> tus pantallas?
      </h2>
      <p style={{ fontSize: 18, color: '#94a3b8', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
        Empieza gratis hoy. Sin tarjeta de crédito. Sin contratos.
      </p>
      <a href="#pricing" className="btn-primary" style={{ fontSize: 18, padding: '18px 44px' }}>
        🚀 Crear cuenta gratis
      </a>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{
      padding: '48px 40px 32px', borderTop: '1px solid rgba(255,255,255,0.06)',
      maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40, marginBottom: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 800,
            }}>IS</div>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Integral Signage</span>
          </div>
          <p style={{ fontSize: 13, color: '#64748b', maxWidth: 300, lineHeight: 1.6 }}>
            Plataforma integral de Digital Signage & Audio para empresas modernas.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          <div>
            <h5 style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Producto</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#features" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Features</a>
              <a href="#pricing" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Precios</a>
              <a href="#industries" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Industrias</a>
            </div>
          </div>
          <div>
            <h5 style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Soporte</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Centro de ayuda</a>
              <a href="#" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Contacto</a>
            </div>
          </div>
          <div>
            <h5 style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Privacidad</a>
              <a href="#" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Términos</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#475569' }}>
          © {new Date().getFullYear()} Integral Signage. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ═══ MAIN PAGE ═══ */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBelt />
      <Features />
      <HowItWorks />
      <Industries />
      <Pricing />
      <Testimonial />
      <CTAFinal />
      <Footer />
    </main>
  );
}

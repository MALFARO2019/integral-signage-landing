/* ═══════════════════════════════════════════════════
   INTEGRAL SIGNAGE — LANDING PAGE
   integralsignage.io
   Server Component — ISR (plans fetched from API)
   ═══════════════════════════════════════════════════ */

import ContactForm from './components/ContactForm';

const APP_URL  = process.env.NEXT_PUBLIC_APP_URL  || 'https://app.integralsignage.io';
const API_URL  = process.env.NEXT_PUBLIC_API_URL  || 'https://api.integralsignage.io/api';

/* ─── Types ─── */
interface Plan {
  slug: string;
  name: string;
  description: string;
  price_monthly: number | null;
  price_yearly: number | null;
  currency: string;
  max_devices: number;
  max_storage_gb: number;
  max_users: number;
  max_locals: number;
  features: Record<string, boolean>;
  lemon_variant_id: string | null;
}

/* ─── Fetch plans with ISR (revalidate every 5 min) ─── */
async function fetchPlans(): Promise<Plan[]> {
  try {
    const res = await fetch(`${API_URL}/billing/plans`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      console.error('[fetchPlans] non-ok status:', res.status, 'from', API_URL);
      return defaultPlans;
    }
    const json = await res.json();
    return json.plans?.length ? json.plans : defaultPlans;
  } catch (e) {
    console.error('[fetchPlans] error:', e instanceof Error ? e.message : String(e), 'API_URL:', API_URL);
    return defaultPlans;
  }
}

/* ─── Fallback static plans (if API is unreachable) ─── */
const defaultPlans: Plan[] = [
  {
    slug: 'starter', name: 'Starter', description: 'Ideal para negocios pequeños',
    price_monthly: 0, price_yearly: 0, currency: 'USD',
    max_devices: 2, max_storage_gb: 1, max_users: 1, max_locals: 1,
    features: {}, lemon_variant_id: null,
  },
  {
    slug: 'pro', name: 'Pro', description: 'Para cadenas en crecimiento',
    price_monthly: null, price_yearly: null, currency: 'USD',
    max_devices: 50, max_storage_gb: 100, max_users: 10, max_locals: 20,
    features: {}, lemon_variant_id: null,
  },
  {
    slug: 'enterprise', name: 'Enterprise', description: 'Solución a medida para grandes corporaciones',
    price_monthly: null, price_yearly: null, currency: 'USD',
    max_devices: 9999, max_storage_gb: 9999, max_users: 9999, max_locals: 9999,
    features: {}, lemon_variant_id: null,
  },
];

/* ─── Helper: format price ─── */
function formatPrice(plan: Plan): { label: string; period: string } {
  if (plan.slug === 'enterprise') return { label: 'A consultar', period: '' };
  if (!plan.price_monthly || plan.price_monthly === 0) return { label: 'Gratis', period: '' };
  return { label: `$${Math.round(plan.price_monthly)}`, period: '/mes' };
}

/* ─── Navbar ─── */
function Navbar() {
  return (
    <nav className="glass" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '14px 40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/kastio-logo.svg"
          alt="Kastio"
          style={{ height: 56, width: 'auto', objectFit: 'contain' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <a href="#features" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}>Features</a>
        <a href="#pricing"  style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}>Precios</a>
        <a href="#industries" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}>Industrias</a>
        <a href={`${APP_URL}/login`}
           className="btn-secondary" style={{ padding: '8px 20px', fontSize: 13 }}>
          Iniciar sesión
        </a>
        <a href={`${APP_URL}/register`}
           className="btn-primary"
           style={{ padding: '8px 20px', fontSize: 13, boxShadow: 'none' }}
           data-ga-event="cta_click" data-ga-label="navbar_trial">
          Prueba gratis
        </a>
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
          <a href={`${APP_URL}/register`}
             className="btn-primary"
             style={{ fontSize: 16, padding: '16px 36px' }}
             data-ga-event="cta_click" data-ga-label="hero_trial">
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

      {/* Dashboard mockup (styled HTML, no image dependency) */}
      <div className="animate-pulse-glow" style={{
        marginTop: 60, width: '90%', maxWidth: 1000,
        background: 'linear-gradient(135deg, rgba(15,15,30,0.9), rgba(10,10,20,0.95))',
        border: '1px solid rgba(99,102,241,0.2)',
        borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
      }}>
        {/* Browser bar */}
        <div style={{
          padding: '12px 20px', background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#ef4444','#f59e0b','#22c55e'].map(c => (
              <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
            ))}
          </div>
          <div style={{
            flex: 1, maxWidth: 400, margin: '0 auto',
            background: 'rgba(255,255,255,0.05)', borderRadius: 6,
            padding: '4px 12px', fontSize: 11, color: '#475569', textAlign: 'center',
          }}>
            admin.integralsignage.io
          </div>
        </div>
        {/* Stats row */}
        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { label: 'Dispositivos Online', value: '47/52', color: '#22c55e' },
              { label: 'Locales Activos', value: '12', color: '#6366f1' },
              { label: 'Playlists', value: '38', color: '#8b5cf6' },
              { label: 'Tiempo Activo', value: '99.7%', color: '#f59e0b' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 10, padding: '14px 16px',
              }}>
                <div style={{ fontSize: 10, color: '#64748b', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>
          {/* Device rows */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, overflow: 'hidden' }}>
            {[
              { name: 'Pantalla Entrada', local: 'Zona 1 — Sucursal Central', status: 'ONLINE', playlist: 'Menú Principal' },
              { name: 'Menú Digital', local: 'Caja Principal', status: 'ONLINE', playlist: 'Promociones' },
              { name: 'Lobby Display', local: 'Espera', status: 'OFFLINE', playlist: '—' },
            ].map(d => (
              <div key={d.name} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '10px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: 12,
              }}>
                <span style={{
                  padding: '2px 8px', borderRadius: 20, fontSize: 10, fontWeight: 600, minWidth: 60, textAlign: 'center',
                  background: d.status === 'ONLINE' ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)',
                  color: d.status === 'ONLINE' ? '#22c55e' : '#ef4444',
                }}>
                  {d.status}
                </span>
                <span style={{ flex: 1, fontWeight: 500 }}>{d.name}</span>
                <span style={{ color: '#64748b' }}>{d.local}</span>
                <span style={{ color: '#818cf8' }}>{d.playlist}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Logo Belt ─── */
function LogoBelt() {
  const logos = ['🍔 Cadena QSR', '🏪 Retail Centroamérica', '🏥 Red de Salud', '🏢 Corporativo', '🎓 Universidad'];
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
    { icon: '📺', title: 'Video Signage', desc: 'Gestiona contenido visual en todas tus pantallas. Sube videos, imágenes y diseña playlists profesionales desde el navegador.', color: '#6366f1' },
    { icon: '🎵', title: 'Audio & Música', desc: 'Control total del audio ambiental. Programa música por horario, zona y localidad. Integración con Spotify y bibliotecas propias.', color: '#22c55e' },
    { icon: '📊', title: 'Monitoreo en Tiempo Real', desc: 'Dashboard con estado de dispositivos, alertas inteligentes, prueba de reproducción y métricas de uptime.', color: '#f59e0b' },
    { icon: '🎨', title: 'Editor Visual', desc: 'Diseña pantallas multi-zona sin código. Arrastra y suelta contenido, programa transiciones y previsualiza en vivo.', color: '#ec4899' },
    { icon: '📱', title: 'Multi-Plataforma', desc: 'Players nativos para Android, Windows y Smart TVs. Sincronización automática y actualizaciones OTA.', color: '#3b82f6' },
    { icon: '🏢', title: 'Multi-Local', desc: 'Administra sucursales, zonas y grupos desde un solo panel. Programaciones específicas por localidad.', color: '#8b5cf6' },
  ];

  return (
    <section id="features" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 className="section-title">Todo lo que necesitas,<br /><span className="gradient-text">nada que te sobre</span></h2>
        <p className="section-subtitle">Una plataforma unificada para video, audio y contenido interactivo.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
        {features.map(f => (
          <div key={f.title} className="glass" style={{ padding: 32, borderRadius: 20, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: `radial-gradient(circle, ${f.color}15, transparent)` }} />
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
          <div key={s.num} style={{ flex: '1 1 240px', maxWidth: 280, textAlign: 'center', padding: 32 }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
              border: '1px solid rgba(99,102,241,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32,
            }}>
              {s.icon}
            </div>
            <div style={{ fontSize: 11, color: '#6366f1', fontWeight: 700, marginBottom: 8, letterSpacing: '0.1em' }}>PASO {s.num}</div>
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

/* ─── Pricing (Server Component receives pre-fetched plans) ─── */
function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <section id="pricing" style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 className="section-title">Planes <span className="gradient-text">flexibles</span></h2>
        <p className="section-subtitle">Empieza gratis y escala cuando necesites. Sin sorpresas.</p>
      </div>

      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
        {plans.map(plan => {
          const { label, period } = formatPrice(plan);
          const isHighlight = plan.slug === 'pro';
          const isEnterprise = plan.slug === 'enterprise';
          const href = isEnterprise ? '#contact' : `${APP_URL}/register?plan=${plan.slug}`;
          const storageLabel = plan.max_storage_gb >= 9000 ? 'Ilimitado' : `${plan.max_storage_gb} GB`;
          const devicesLabel = plan.max_devices >= 9000 ? 'Ilimitados' : `Hasta ${plan.max_devices}`;
          const usersLabel   = plan.max_users >= 9000 ? 'Ilimitados' : `${plan.max_users} usuarios`;
          const localsLabel  = plan.max_locals >= 9000 ? 'Ilimitados' : `${plan.max_locals} locales`;

          const featureList = isEnterprise
            ? ['Dispositivos ilimitados', 'Storage ilimitado', 'Usuarios ilimitados', 'SLA dedicado', 'Onboarding personalizado', 'API completa']
            : [devicesLabel, `${storageLabel} almacenamiento`, usersLabel, localsLabel];

          return (
            <div key={plan.slug} style={{
              flex: '1 1 300px', maxWidth: 340,
              padding: 32, borderRadius: 20,
              background: isHighlight
                ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.06))'
                : 'rgba(20,20,40,0.4)',
              border: isHighlight
                ? '2px solid rgba(99,102,241,0.3)'
                : '1px solid rgba(255,255,255,0.06)',
              position: 'relative',
            }}>
              {isHighlight && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  padding: '4px 16px', borderRadius: 20,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: '#fff',
                }}>
                  MÁS POPULAR
                </div>
              )}

              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, marginTop: isHighlight ? 8 : 0 }}>{plan.name}</h3>
              <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 20 }}>{plan.description}</p>

              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em' }}>{label}</span>
                <span style={{ fontSize: 14, color: '#64748b' }}>{period}</span>
              </div>

              <ul style={{ listStyle: 'none', marginBottom: 28 }}>
                {featureList.map(f => (
                  <li key={f} style={{ padding: '6px 0', fontSize: 14, color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#22c55e' }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href={href}
                className={isHighlight ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', justifyContent: 'center', display: 'flex', boxShadow: isHighlight ? 'none' : undefined }}
                data-ga-event="cta_click"
                data-ga-label={`pricing_${plan.slug}`}
              >
                {isEnterprise ? 'Contáctanos' : plan.slug === 'starter' ? 'Empezar gratis' : 'Prueba 14 días gratis'}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Testimonial ─── */
function Testimonial() {
  return (
    <section style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
      <div className="glass" style={{ padding: '48px 40px', borderRadius: 24 }}>
        <div style={{ fontSize: 48, marginBottom: 20 }}>🏪</div>
        <blockquote style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 500, lineHeight: 1.6, fontStyle: 'italic', marginBottom: 24, color: '#cbd5e1' }}>
          &ldquo;Integral Signage nos permitió centralizar la gestión de pantallas y audio en todas nuestras
          sucursales. Antes usábamos USBs y ahora todo se actualiza en tiempo real desde el navegador.&rdquo;
        </blockquote>
        <div>
          <p style={{ fontWeight: 700, fontSize: 15 }}>Cadena de restaurantes — Centroamérica</p>
          <p style={{ fontSize: 13, color: '#64748b' }}>12 dispositivos en 6 sucursales</p>
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
      <a
        href={`${APP_URL}/register`}
        className="btn-primary"
        style={{ fontSize: 18, padding: '18px 44px' }}
        data-ga-event="cta_click"
        data-ga-label="cta_final"
      >
        🚀 Crear cuenta gratis
      </a>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ padding: '48px 40px 32px', borderTop: '1px solid rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40, marginBottom: 32 }}>
        <div>
          <img src="/kastio-logo.svg" alt="Kastio" style={{ height: 44, width: 'auto', objectFit: 'contain', marginBottom: 12 }} />
          <p style={{ fontSize: 13, color: '#64748b', maxWidth: 300, lineHeight: 1.6 }}>
            Plataforma integral de Digital Signage & Audio para empresas modernas.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          <div>
            <h5 style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Producto</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#features"   style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Features</a>
              <a href="#pricing"    style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Precios</a>
              <a href="#industries" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Industrias</a>
            </div>
          </div>
          <div>
            <h5 style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Soporte</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#contact" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Contacto</a>
              <a href={`${APP_URL}/login`} style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Iniciar sesión</a>
            </div>
          </div>
          <div>
            <h5 style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="/privacidad" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Privacidad</a>
              <a href="/terminos" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>Términos</a>
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

/* ═══ MAIN PAGE (Server Component) ═══ */
export default async function Home() {
  const plans = await fetchPlans();

  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBelt />
      <Features />
      <HowItWorks />
      <Industries />
      <Pricing plans={plans} />
      <Testimonial />
      <CTAFinal />
      <section id="contact" style={{ maxWidth: 680, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="section-title">¿Necesitas una solución <span className="gradient-text">Enterprise</span>?</h2>
          <p className="section-subtitle">Cuéntanos sobre tu empresa y te contactamos en menos de 24 horas.</p>
        </div>
        <ContactForm apiUrl={API_URL} />
      </section>
      <Footer />
    </main>
  );
}

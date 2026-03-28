import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad — Integral Signage',
  description: 'Política de privacidad de Integral Signage. Cómo recopilamos, usamos y protegemos tu información.',
  robots: { index: true, follow: true },
};

const SITE_URL = 'https://integralsignage.io';
const CONTACT_EMAIL = 'ventas@integralsignage.io';
const LAST_UPDATED = '28 de marzo de 2026';

export default function PrivacidadPage() {
  const section: React.CSSProperties = { marginBottom: 40 };
  const h2: React.CSSProperties = { fontSize: 20, fontWeight: 700, color: '#e2e8f0', marginBottom: 12, marginTop: 0 };
  const p: React.CSSProperties = { color: '#94a3b8', lineHeight: 1.8, marginBottom: 12 };
  const ul: React.CSSProperties = { color: '#94a3b8', lineHeight: 1.8, paddingLeft: 20, marginBottom: 12 };

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', fontFamily: 'var(--font-inter, system-ui, sans-serif)' }}>

      {/* Nav */}
      <nav style={{ padding: '16px 40px', borderBottom: '1px solid rgba(99,102,241,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/integral-logo.png" alt="Integral Signage" style={{ height: 52, width: 'auto' }} />
        </a>
        <a href="/" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}>← Volver al inicio</a>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 100px' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: '#e2e8f0', marginBottom: 8, marginTop: 0 }}>
          Política de Privacidad
        </h1>
        <p style={{ color: '#64748b', fontSize: 14, marginBottom: 48 }}>
          Última actualización: {LAST_UPDATED}
        </p>

        <div style={section}>
          <h2 style={h2}>1. Quiénes somos</h2>
          <p style={p}>
            Integral Signage es una plataforma de señalización digital y audio ambiental operada por Integral Signage S.A.
            Podés contactarnos en <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#6366f1' }}>{CONTACT_EMAIL}</a>.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>2. Información que recopilamos</h2>
          <p style={p}>Recopilamos la siguiente información cuando usás nuestra plataforma:</p>
          <ul style={ul}>
            <li><strong style={{ color: '#e2e8f0' }}>Datos de cuenta:</strong> nombre, correo electrónico, contraseña (almacenada cifrada).</li>
            <li><strong style={{ color: '#e2e8f0' }}>Datos de empresa:</strong> nombre de la empresa, país, plan de suscripción.</li>
            <li><strong style={{ color: '#e2e8f0' }}>Datos de uso:</strong> dispositivos registrados, contenido subido, eventos de reproducción.</li>
            <li><strong style={{ color: '#e2e8f0' }}>Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo, logs de acceso.</li>
            <li><strong style={{ color: '#e2e8f0' }}>Datos de pago:</strong> procesados directamente por Lemon Squeezy. No almacenamos números de tarjeta.</li>
          </ul>
        </div>

        <div style={section}>
          <h2 style={h2}>3. Cómo usamos tu información</h2>
          <ul style={ul}>
            <li>Proveer y mantener el servicio de señalización digital.</li>
            <li>Procesar pagos y gestionar tu suscripción.</li>
            <li>Enviarte notificaciones relacionadas con tu cuenta (alertas, facturas, actualizaciones).</li>
            <li>Mejorar la plataforma mediante análisis de uso agregado y anonimizado.</li>
            <li>Cumplir con obligaciones legales aplicables.</li>
          </ul>
          <p style={p}>No vendemos ni compartimos tu información personal con terceros para fines publicitarios.</p>
        </div>

        <div style={section}>
          <h2 style={h2}>4. Almacenamiento y seguridad</h2>
          <p style={p}>
            Tus datos se almacenan en servidores ubicados en la región de América. Aplicamos medidas técnicas y organizacionales
            para proteger tu información, incluyendo cifrado en tránsito (TLS), cifrado en reposo y control de acceso por roles.
          </p>
          <p style={p}>
            Conservamos tus datos mientras tu cuenta esté activa. Al cancelar tu cuenta, eliminamos o anonimizamos
            tus datos en un plazo máximo de 90 días, salvo obligación legal de conservarlos por más tiempo.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>5. Cookies y analítica</h2>
          <p style={p}>
            Usamos Google Analytics 4 para medir el uso de este sitio web (páginas visitadas, interacciones con CTA).
            Los datos son anonimizados y no se vinculan a tu identidad personal.
            Podés desactivar la recopilación usando extensiones como uBlock Origin o el modo privado de tu navegador.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>6. Tus derechos</h2>
          <p style={p}>Tenés derecho a:</p>
          <ul style={ul}>
            <li><strong style={{ color: '#e2e8f0' }}>Acceso:</strong> solicitar una copia de los datos que tenemos sobre vos.</li>
            <li><strong style={{ color: '#e2e8f0' }}>Rectificación:</strong> corregir datos incorrectos o incompletos.</li>
            <li><strong style={{ color: '#e2e8f0' }}>Eliminación:</strong> solicitar la eliminación de tu cuenta y datos asociados.</li>
            <li><strong style={{ color: '#e2e8f0' }}>Portabilidad:</strong> exportar tus datos en formato legible por máquina.</li>
            <li><strong style={{ color: '#e2e8f0' }}>Oposición:</strong> oponerte al procesamiento de tus datos en ciertos casos.</li>
          </ul>
          <p style={p}>
            Para ejercer cualquiera de estos derechos, contactanos en{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#6366f1' }}>{CONTACT_EMAIL}</a>.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>7. Cambios a esta política</h2>
          <p style={p}>
            Podemos actualizar esta política ocasionalmente. Te notificaremos por correo ante cambios significativos.
            La versión vigente siempre estará disponible en{' '}
            <a href={`${SITE_URL}/privacidad`} style={{ color: '#6366f1' }}>{SITE_URL}/privacidad</a>.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>8. Contacto</h2>
          <p style={p}>
            ¿Preguntas sobre esta política? Escribinos a{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#6366f1' }}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(99,102,241,0.12)', padding: '24px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#475569' }}>
          © {new Date().getFullYear()} Integral Signage.{' '}
          <a href="/privacidad" style={{ color: '#6366f1', textDecoration: 'none' }}>Privacidad</a>{' · '}
          <a href="/terminos" style={{ color: '#6366f1', textDecoration: 'none' }}>Términos</a>
        </p>
      </footer>
    </div>
  );
}

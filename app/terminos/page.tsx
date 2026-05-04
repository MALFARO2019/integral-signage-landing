import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio — Kastio',
  description: 'Términos y condiciones de uso de la plataforma Kastio.',
  robots: { index: true, follow: true },
};

const SITE_URL = 'https://kastio.io';
const CONTACT_EMAIL = 'ventas@kastio.io';
const LAST_UPDATED = '28 de marzo de 2026';

export default function TerminosPage() {
  const section: React.CSSProperties = { marginBottom: 40 };
  const h2: React.CSSProperties = { fontSize: 20, fontWeight: 700, color: '#e2e8f0', marginBottom: 12, marginTop: 0 };
  const p: React.CSSProperties = { color: '#94a3b8', lineHeight: 1.8, marginBottom: 12 };
  const ul: React.CSSProperties = { color: '#94a3b8', lineHeight: 1.8, paddingLeft: 20, marginBottom: 12 };

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', fontFamily: 'var(--font-inter, system-ui, sans-serif)' }}>

      {/* Nav */}
      <nav style={{ padding: '16px 40px', borderBottom: '1px solid rgba(99,102,241,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/kastio-logo.svg" alt="Kastio" style={{ height: 44, width: 'auto' }} />
        </a>
        <a href="/" style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}>← Volver al inicio</a>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 100px' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: '#e2e8f0', marginBottom: 8, marginTop: 0 }}>
          Términos de Servicio
        </h1>
        <p style={{ color: '#64748b', fontSize: 14, marginBottom: 48 }}>
          Última actualización: {LAST_UPDATED}
        </p>

        <div style={section}>
          <h2 style={h2}>1. Aceptación de los términos</h2>
          <p style={p}>
            Al registrarte o usar la plataforma Kastio ({SITE_URL}), aceptás estos Términos de Servicio
            en su totalidad. Si no estás de acuerdo, no uses el servicio.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>2. Descripción del servicio</h2>
          <p style={p}>
            Kastio es una plataforma SaaS de señalización digital y audio ambiental que permite gestionar
            pantallas, contenido multimedia y audio en establecimientos comerciales. El servicio incluye:
          </p>
          <ul style={ul}>
            <li>Panel de administración web para gestión de dispositivos y contenido.</li>
            <li>Aplicaciones reproductoras para Android y Windows.</li>
            <li>Almacenamiento de medios en la nube.</li>
            <li>Integraciones con proveedores de audio (YouTube, Spotify, Jamendo, Epidemic Sound).</li>
          </ul>
        </div>

        <div style={section}>
          <h2 style={h2}>3. Cuentas y acceso</h2>
          <ul style={ul}>
            <li>Debés tener al menos 18 años o representar a una empresa legalmente constituida.</li>
            <li>Sos responsable de mantener la confidencialidad de tus credenciales.</li>
            <li>Debés notificarnos inmediatamente ante uso no autorizado de tu cuenta.</li>
            <li>No podés compartir tu cuenta ni permitir acceso a terceros no autorizados.</li>
          </ul>
        </div>

        <div style={section}>
          <h2 style={h2}>4. Planes y facturación</h2>
          <p style={p}>
            Ofrecemos planes Starter (gratuito), Pro y Enterprise. Los planes de pago se facturan mensualmente
            a través de Lemon Squeezy. Los precios vigentes están publicados en {SITE_URL}/#pricing.
          </p>
          <ul style={ul}>
            <li>El plan Starter incluye funcionalidades básicas sin costo mientras se mantenga disponible.</li>
            <li>Los planes de pago se renuevan automáticamente. Podés cancelar en cualquier momento desde el portal de cliente.</li>
            <li>No realizamos reembolsos por períodos parciales, salvo error de cobro de nuestra parte.</li>
            <li>Nos reservamos el derecho de modificar precios con 30 días de aviso previo.</li>
          </ul>
        </div>

        <div style={section}>
          <h2 style={h2}>5. Contenido del usuario</h2>
          <p style={p}>
            Sos el único responsable del contenido que subís a la plataforma (imágenes, videos, audio, textos).
            Al subir contenido, declarás que:
          </p>
          <ul style={ul}>
            <li>Tenés los derechos de uso y distribución del contenido.</li>
            <li>El contenido no infringe derechos de autor, marcas registradas ni derechos de terceros.</li>
            <li>El contenido no es ilegal, ofensivo, difamatorio ni viola la privacidad de terceros.</li>
          </ul>
          <p style={p}>
            Nos reservamos el derecho de remover contenido que viole estos términos sin previo aviso.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>6. Uso aceptable</h2>
          <p style={p}>Está prohibido usar la plataforma para:</p>
          <ul style={ul}>
            <li>Actividades ilegales o que violen regulaciones locales aplicables.</li>
            <li>Distribuir malware, spam o contenido engañoso.</li>
            <li>Intentar acceder a datos de otros tenants o usuarios.</li>
            <li>Realizar ingeniería inversa, scraping masivo o uso abusivo de la API.</li>
            <li>Revender el servicio sin autorización expresa por escrito.</li>
          </ul>
        </div>

        <div style={section}>
          <h2 style={h2}>7. Disponibilidad y SLA</h2>
          <p style={p}>
            Nos esforzamos por mantener una disponibilidad del 99.5% mensual. No garantizamos disponibilidad
            ininterrumpida. Realizamos mantenimientos programados con aviso previo cuando sea posible.
            No somos responsables por interrupciones causadas por terceros (proveedores de cloud, ISPs, etc.).
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>8. Limitación de responsabilidad</h2>
          <p style={p}>
            En la máxima medida permitida por la ley, Kastio no será responsable por daños indirectos,
            incidentales, especiales o consecuentes derivados del uso o imposibilidad de uso del servicio.
            Nuestra responsabilidad máxima estará limitada al monto pagado por el usuario en los últimos 3 meses.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>9. Propiedad intelectual</h2>
          <p style={p}>
            La plataforma, su código fuente, diseño, marcas y documentación son propiedad exclusiva de Kastio
            y están protegidos por derechos de autor. No se te otorga ninguna licencia sobre ellos más allá del uso
            normal del servicio.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>10. Terminación</h2>
          <p style={p}>
            Podés cancelar tu cuenta en cualquier momento. Nos reservamos el derecho de suspender o terminar
            cuentas que violen estos términos, con o sin previo aviso dependiendo de la gravedad.
            Al terminar, tus datos serán eliminados según lo descrito en nuestra Política de Privacidad.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>11. Cambios a los términos</h2>
          <p style={p}>
            Podemos modificar estos términos. Te notificaremos por correo con al menos 15 días de anticipación
            ante cambios materiales. El uso continuado del servicio implica aceptación de los nuevos términos.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>12. Ley aplicable y contacto</h2>
          <p style={p}>
            Estos términos se rigen por las leyes de Costa Rica. Para cualquier consulta o disputa, contactanos en{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#6366f1' }}>{CONTACT_EMAIL}</a> antes de
            iniciar cualquier proceso legal.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(99,102,241,0.12)', padding: '24px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#475569' }}>
          © {new Date().getFullYear()} Kastio.{' '}
          <a href="/privacidad" style={{ color: '#6366f1', textDecoration: 'none' }}>Privacidad</a>{' · '}
          <a href="/terminos" style={{ color: '#6366f1', textDecoration: 'none' }}>Términos</a>
        </p>
      </footer>
    </div>
  );
}

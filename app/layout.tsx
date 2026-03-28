import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.integralsignage.io';
const SITE_URL = 'https://integralsignage.io';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Integral Signage — Digital Signage & Audio para Empresas",
  description: "Plataforma integral de señalización digital y audio ambiental. Administra pantallas, música y contenido desde una sola plataforma. Gratis para empezar.",
  keywords: "digital signage, señalización digital, audio ambiental, pantallas, restaurantes, retail, contenido digital, gestión de pantallas",
  authors: [{ name: "Integral Signage" }],
  openGraph: {
    title: "Integral Signage — Digital Signage & Audio",
    description: "La plataforma integral para gestionar pantallas y audio en tu negocio. 14 días gratis.",
    type: "website",
    locale: "es_CR",
    url: SITE_URL,
    siteName: "Integral Signage",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Integral Signage Dashboard' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral Signage — Digital Signage & Audio",
    description: "La plataforma integral para gestionar pantallas y audio en tu negocio.",
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Integral Signage',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, Windows, Web',
  description: 'Plataforma integral de señalización digital y audio ambiental para empresas.',
  url: SITE_URL,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '0',
    offerCount: '3',
  },
  provider: {
    '@type': 'Organization',
    name: 'Integral Signage',
    url: SITE_URL,
    contactPoint: { '@type': 'ContactPoint', email: 'ventas@integralsignage.io', contactType: 'sales' },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}</Script>
            {/* CTA click tracking via data attributes */}
            <Script id="ga4-cta-tracking" strategy="afterInteractive">{`
              document.addEventListener('click', function(e) {
                var el = e.target.closest('[data-ga-event]');
                if (!el) return;
                var event = el.getAttribute('data-ga-event');
                var label = el.getAttribute('data-ga-label');
                if (window.gtag) {
                  window.gtag('event', event, { event_category: 'cta', event_label: label });
                }
              });
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}

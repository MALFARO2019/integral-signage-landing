import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Integral Signage — Digital Signage & Audio para Empresas",
  description: "Plataforma integral de señalización digital y audio ambiental. Administra pantallas, música y contenido desde una sola plataforma.",
  keywords: "digital signage, señalización digital, audio ambiental, pantallas, restaurantes, retail, contenido digital",
  openGraph: {
    title: "Integral Signage — Digital Signage & Audio",
    description: "La plataforma integral para gestionar pantallas y audio en tu negocio.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}

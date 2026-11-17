import type { Metadata } from 'next';

import './globals.css';

// Tipografía del sistema: sin descargas de fuentes externas.


// Definición completa de Metadata y Open Graph
export const metadata: Metadata = {
  title: {
    default: 'Advance Agencia Creativa | Avisos Publicitarios e Impresión',
    template: '%s | Advance Agencia Creativa',
  },
  description:
    'Especialistas en avisos publicitarios, impresión comercial, sublimación, vinilos y artículos promocionales en Montería. Transformamos tus ideas en publicidad de alto impacto.',
  keywords: [
    'Advance Agencia Creativa',
    'Avisos publicitarios Montería',
    'Impresión digital Montería',
    'Sublimación',
    'Letras 3D',
    'Vinilos adhesivos',
    'Publicidad Montería',
    'Microperforados',
  ],
  authors: [{ name: 'Advance Agencia Creativa' }],
  creator: 'Advance Agencia Creativa',
  publisher: 'Advance Agencia Creativa',
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) } : {}),

  // Configuración de previsualización en WhatsApp, Facebook, LinkedIn
  openGraph: {
    title: 'Advance Agencia Creativa | Publicidad de Alto Impacto',
    description:
      'Soluciones en avisos publicitarios, impresión digital, sublimación y artículos promocionales.',

    siteName: 'Advance Agencia Creativa',
    images: [
      {
        url: '/images/advance-studio.png', // Imagen de previsualización en public/
        width: 1536,
        height: 1024,
        alt: 'Advance Agencia Creativa - Portafolio y Servicios',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },

  // Configuración de previsualización en Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Advance Agencia Creativa | Publicidad de Alto Impacto',
    description:
      'Soluciones en avisos publicitarios, impresión digital, sublimación y artículos promocionales.',
    images: ['/images/advance-studio.png'],
  },

  // Robots e Indexación
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Favicon e Iconos
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
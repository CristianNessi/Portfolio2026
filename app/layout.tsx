import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristian Nessi | Desarrollador Full Stack",
  description:
    "Portafolio profesional de Cristian Nessi, desarrollador full stack creativo e innovador.",

  keywords: [
    "Cristian Nessi",
    "Desarrollador Full Stack",
    "Frontend Developer",
    "Next.js",
    "React",
    "Portafolio",
  ],

  authors: [{ name: "Cristian Nessi" }],
  creator: "Cristian Nessi",

  openGraph: {
    title: "Cristian Nessi | Desarrollador Full Stack",
    description:
      "Portafolio profesional de Cristian Nessi. Desarrollo web moderno, escalable y enfocado en UX.",
    url: "https://TU-DOMINIO.vercel.app",
    siteName: "Cristian Nessi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cristian Nessi Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cristian Nessi | Desarrollador Full Stack",
    description:
      "Portafolio profesional de Cristian Nessi. Desarrollo web moderno y escalable.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}



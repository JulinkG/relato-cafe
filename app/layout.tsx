import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

// Tipografías oficiales de Relato café: Gaegu ES (títulos) y Nunito (textos)
// Gaegu ES es una versión de Gaegu con acentos y signos del español; se sirve desde app/fonts (licencia OFL).
const gaegu = localFont({
  src: [
    { path: "./fonts/GaeguES-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/GaeguES-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GaeguES-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-gaegu",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "Relato café · Historias con café",
  description:
    "Cafetería en Netzahualcóyotl 307, Col. Reforma, Oaxaca de Juárez. Café para llevar y pedidos por WhatsApp. Menú con precios, abierto de lunes a sábado de 8:00 a 18:00. BARDO · Barra errante para tus eventos.",
  icons: { icon: "/marca/cacomixtle.png" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${gaegu.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

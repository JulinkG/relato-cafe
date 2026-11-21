import type { Metadata, Viewport } from "next";
import { Gaegu, Nunito } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

// Tipografías oficiales de Relato café: Gaegu (títulos) y Nunito (textos)
const gaegu = Gaegu({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-gaegu", display: "swap" });
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
    "Cafetería en Netzahualcóyotl 307, Col. Reforma, Oaxaca de Juárez. Café para llevar y pedidos por WhatsApp. Menú con precios, horario de 8:00 a 18:00. BARDO · Barra errante para tus eventos.",
  icons: { icon: "/marca/cacomixtle.png" },
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${gaegu.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

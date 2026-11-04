import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree, Shantell_Sans, Gaegu, Nunito } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });
const shantell = Shantell_Sans({ subsets: ["latin"], variable: "--font-shantell", display: "swap" });
const gaegu = Gaegu({ subsets: ["latin"], weight: "700", variable: "--font-gaegu", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], weight: "700", variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "Relato café · Historias con café",
  description:
    "Cafetería en Netzahualcóyotl 307, Col. Reforma, Oaxaca de Juárez. Café para llevar y pedidos por WhatsApp. Menú con precios, horario de 8:00 a 18:00. BARDO · Barra errante para tus eventos.",
  icons: { icon: "/marca/cacomixtle.png" },
};

export const viewport: Viewport = { themeColor: "#F6F0F2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${fraunces.variable} ${figtree.variable} ${shantell.variable} ${gaegu.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

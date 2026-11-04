import menu from "@/data/menu.json";
import negocio from "@/data/negocio.json";
import historiasData from "@/data/historias.json";

export type Historia = {
  slug: string;
  titulo: string;
  subtitulo: string;
  producto?: { categoria: string; nombre: string };
  sticker: "cafe" | "soda" | "flor" | "pata";
  parrafos: string[];
};

export const historias = historiasData.historias as Historia[];

export const productoDe = (h: Historia): Producto | undefined =>
  h.producto
    ? (menu.categorias as Categoria[])
        .find((c) => c.id === h.producto!.categoria)
        ?.productos.find((p) => p.nombre === h.producto!.nombre)
    : undefined;

export type Producto = { nombre: string; precio: number; descripcion: string };
export type Categoria = { id: string; nombre: string; productos: Producto[] };

export const categorias = menu.categorias as Categoria[];
export { negocio };

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const destacados: Producto[] = negocio.destacados
  .map((id) => categorias.flatMap((c) => c.productos).find((p) => slug(p.nombre) === id))
  .filter((p): p is Producto => Boolean(p));

export const precio = (n: number) => `$${n}`;

export const waLink = (texto?: string) =>
  `https://wa.me/${negocio.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ""}`;

// Búsqueda exacta del negocio en Google Maps (nombre + dirección completa con CP)
const direccionCompleta = negocio.direccion.mapa;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccionCompleta)}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(direccionCompleta)}&z=16&output=embed`;

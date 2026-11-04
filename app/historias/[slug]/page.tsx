import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Sticker } from "@/components/Sticker";
import { ArrowLeft, WhatsApp } from "@/components/Icons";
import { historias, precio, productoDe, waLink } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return historias.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const h = historias.find((x) => x.slug === slug);
  if (!h) return {};
  return { title: `${h.titulo} · Historias de Relato café`, description: h.parrafos[0] };
}

export default async function HistoriaPage({ params }: Params) {
  const { slug } = await params;
  const idx = historias.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const h = historias[idx];
  const producto = productoDe(h);
  const siguiente = historias.length > 1 ? historias[(idx + 1) % historias.length] : null;

  return (
    <>
      <Nav />
      <main className="historia">
        <article className="wrap historia__wrap">
          <Link className="historia__back" href="/historias">
            <ArrowLeft />
            Todas las historias
          </Link>

          <header className="historia__head">
            <h1 className="hero__title reveal">{h.titulo}</h1>
            <p className="hero__slogan reveal" style={{ "--i": 1 } as React.CSSProperties}>
              {h.subtitulo}
            </p>
            <Sticker
              src={`/marca/${h.sticker}.png`}
              width={200}
              height={200}
              rotate={10}
              delay={420}
              style={{ right: "-4%", top: "-10px", width: "clamp(96px, 16vw, 170px)" }}
            />
          </header>

          <div className="historia__body reveal" style={{ "--i": 2 } as React.CSSProperties}>
            {h.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="historia__fin" aria-hidden="true">
              ~ fin ~
            </p>
          </div>

          {producto && (
            <aside className="historia__producto">
              <div>
                <p className="label">Pruébala en Relato</p>
                <div className="item__row" style={{ marginTop: 12 }}>
                  <span className="card__name" style={{ marginTop: 0 }}>
                    {h.titulo}
                  </span>
                  <span className="card__price">{precio(producto.precio)}</span>
                </div>
                <p className="card__desc">
                  {producto.nombre !== h.titulo && <>En la carta: {producto.nombre}. </>}
                  {producto.descripcion}
                </p>
              </div>
              <a
                className="btn"
                href={waLink(`Hola Relato, leí la historia "${h.titulo}" y quiero pedir: ${producto.nombre}.`)}
                target="_blank"
                rel="noopener"
              >
                <WhatsApp />
                Pide por WhatsApp
              </a>
            </aside>
          )}

          {siguiente && (
            <Link className="historia__next" href={`/historias/${siguiente.slug}`}>
              <span className="label">Siguiente historia</span>
              <span className="card__name">{siguiente.titulo}</span>
            </Link>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

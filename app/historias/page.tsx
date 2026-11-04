import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Icons";
import { historias } from "@/lib/data";

export const metadata: Metadata = {
  title: "Historias · Relato café",
  description: "Cuentos cortos de Relato café: cada bebida de la casa tiene su historia.",
  alternates: { canonical: "/historias" },
};

export default function HistoriasPage() {
  return (
    <>
      <Nav />
      <main className="historias">
        <div className="wrap historias__wrap">
          <header className="historias__head">
            <h1 className="hero__title reveal">Historias</h1>
            <p className="hero__slogan reveal" style={{ "--i": 1 } as React.CSSProperties}>
              Cuentos, Relatos y bebidas
            </p>
          </header>

          <ol className="indice">
            {historias.map((h, i) => (
              <li className="indice__item reveal" key={h.slug} style={{ "--i": i + 2 } as React.CSSProperties}>
                <Link className="indice__link" href={`/historias/${h.slug}`}>
                  <span className="indice__text">
                    <span className="indice__title">{h.titulo}</span>
                    <span className="indice__sub">{h.subtitulo}</span>
                    <span className="indice__excerpt">{h.parrafos[0]}</span>
                    <span className="card__link">
                      Leer historia
                      <Arrow className="" />
                    </span>
                  </span>
                  <Image
                    className="indice__sticker"
                    src={`/marca/${h.sticker}.png`}
                    alt=""
                    width={140}
                    height={140}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}

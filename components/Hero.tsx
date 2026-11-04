import Image from "next/image";
import { Sticker } from "./Sticker";
import { OpenStatus } from "./OpenStatus";
import { Arrow, Bag, WhatsApp } from "./Icons";
import { negocio, waLink } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div>
          <h1 className="hero__title reveal" id="hero-title" style={{ "--i": 0 } as React.CSSProperties}>
            Café de especialidad en la Reforma
          </h1>
          <p className="hero__slogan reveal" style={{ "--i": 1 } as React.CSSProperties}>
            {negocio.slogan}
          </p>
          <p className="hero__body reveal" style={{ "--i": 2 } as React.CSSProperties}>
            Espresso, sodas naturales, frappés y algo rico para comer, en {negocio.direccion.calle}. ¡Prueba nuestras
            bebidas, lunches e historias!!
          </p>
          <ul className="servicio reveal" aria-label="Cómo pedir" style={{ "--i": 3 } as React.CSSProperties}>
            <li>
              <Bag />
              Para llevar
            </li>
            <li>
              <WhatsApp />
              Pedidos por WhatsApp
            </li>
          </ul>
          <div className="hero__actions reveal" style={{ "--i": 4 } as React.CSSProperties}>
            <a className="btn" href="#menu">
              Ver menú
              <Arrow />
            </a>
            <a className="btn btn--outline" href={waLink("Hola Relato, quiero hacer un pedido para llevar.")} target="_blank" rel="noopener">
              <WhatsApp />
              Pide por WhatsApp
            </a>
          </div>
          <OpenStatus className="hero__status reveal" />
        </div>

        <div className="hero__art">
          <Image
            className="hero__face reveal"
            src="/marca/cacomixtle.png"
            alt="El cacomixtle de Relato café, dibujado a crayón"
            width={312}
            height={229}
            priority
            style={{ "--i": 1 } as React.CSSProperties}
          />
          <Sticker
            src="/marca/cafe.png"
            width={180}
            height={180}
            rotate={-9}
            delay={520}
            style={{ left: "-6%", top: "-4%", width: "30%" }}
          />
          <Sticker
            src="/marca/soda.png"
            width={180}
            height={180}
            rotate={8}
            delay={640}
            style={{ right: "-10%", bottom: "-8%", width: "30%" }}
          />
          <Sticker
            src="/marca/flor.png"
            width={160}
            height={160}
            rotate={12}
            delay={760}
            style={{ right: "2%", top: "-6%", width: "20%" }}
          />
          <p className="hero__hint">psst, los stickers se despegan</p>
        </div>
      </div>
    </section>
  );
}

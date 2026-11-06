import { HeroArt } from "./HeroArt";
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

        <HeroArt />
      </div>
    </section>
  );
}

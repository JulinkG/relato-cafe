import Image from "next/image";
import { mapsEmbed, mapsLink, negocio, waLink } from "@/lib/data";
import { OpenStatus } from "./OpenStatus";
import { Pin, WhatsApp } from "./Icons";

export function Visita() {
  const { direccion, horario, whatsappVisible } = negocio;
  return (
    <section className="visita" id="visitanos" aria-labelledby="visita-title">
      <div className="wrap visita__grid">
        <div>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <h2 className="heading" id="visita-title">
              Ven por tu café
            </h2>
            <p className="script">Aquí te guardamos una mesa</p>
          </div>

          <dl className="facts">
            <div className="fact">
              <dt className="label">Dirección</dt>
              <dd>
                {direccion.calle}, {direccion.colonia}
                <small>{direccion.ciudad}</small>
              </dd>
            </div>
            <div className="fact">
              <dt className="label">Horario</dt>
              <dd>
                {horario.abre} a {horario.cierra}
                <small>
                  <OpenStatus />
                </small>
              </dd>
            </div>
            <div className="fact">
              <dt className="label">WhatsApp</dt>
              <dd>
                <a href={waLink()} target="_blank" rel="noopener">
                  {whatsappVisible}
                </a>
              </dd>
            </div>
          </dl>

          <div className="visita__actions">
            <a className="btn" href={mapsLink} target="_blank" rel="noopener">
              <Pin />
              Cómo llegar
            </a>
            <a className="btn btn--outline" href={waLink("Hola Relato, tengo una pregunta.")} target="_blank" rel="noopener">
              <WhatsApp />
              Escríbenos
            </a>
          </div>
        </div>

        <div className="map">
          <div className="map__frame">
            <iframe
              title={`Mapa: ${direccion.calle}, ${direccion.colonia}`}
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Image className="map__pata" src="/marca/pata.png" alt="" width={120} height={120} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

import { Logo } from "./Logo";
import { mapsLink, negocio, waLink } from "@/lib/data";

export function Footer() {
  const { direccion, horario, whatsappVisible, slogan } = negocio;
  return (
    <footer className="pie">
      <div className="wrap pie__inner">
        <div>
          <Logo />
          <p className="script">{slogan}</p>
        </div>
        <div>
          <span className="label">Visítanos</span>
          <p>
            <a href={mapsLink} target="_blank" rel="noopener">
              {direccion.calle}, {direccion.colonia}
            </a>
            <br />
            {horario.abre} a {horario.cierra}
          </p>
        </div>
        <div>
          <span className="label">Escríbenos</span>
          <p>
            <a href={waLink()} target="_blank" rel="noopener">
              WhatsApp {whatsappVisible}
            </a>
            <br />
            <a href="/#bardo">Eventos con BARDO</a>
            <br />
            <a href="/historias">Historias</a>
          </p>
        </div>
      </div>
      <div className="wrap">
        <p className="pie__base">© {new Date().getFullYear()} Relato café</p>
      </div>
    </footer>
  );
}

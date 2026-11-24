"use client";

import Image from "next/image";
import { useState } from "react";
import { waLink } from "@/lib/data";
import { Arrow } from "./Icons";
import { Wave } from "./Wave";

const barras = ["Barra de café", "Sodas y limonadas", "Canapés", "Postres"];

export function Bardo() {
  const [seleccion, setSeleccion] = useState<string[]>([barras[0]]);

  const toggleBarra = (b: string) =>
    setSeleccion((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nombre = String(f.get("nombre") ?? "").trim();
    const fecha = String(f.get("fecha") ?? "");
    const invitados = String(f.get("invitados") ?? "");
    const lugar = String(f.get("lugar") ?? "").trim();
    if (!nombre) {
      setError("Dinos tu nombre para saber con quién platicamos.");
      (e.currentTarget.elements.namedItem("nombre") as HTMLInputElement)?.focus();
      return;
    }
    setError(null);
    const fechaTxt = fecha
      ? new Date(`${fecha}T12:00:00`).toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long" })
      : "por definir";
    const msg = [
      `Hola BARDO, soy ${nombre}. Quiero cotizar la barra para un evento.`,
      `• Fecha: ${fechaTxt}`,
      `• Invitados: ${invitados || "por definir"}`,
      `• Tipo de barra: ${seleccion.length ? barras.filter((b) => seleccion.includes(b)).join(", ") : "por definir"}`,
      lugar ? `• Lugar: ${lugar}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <section className="bardo" id="bardo" aria-labelledby="bardo-title">
      <Wave color="var(--color-caramelo)" bg="var(--color-papel)" variant={2} />
      <div className="wrap bardo__inner">
        <div className="bardo__grid">
          <div>
            <Image
              className="bardo__mascot"
              src="/marca/bardo.png"
              alt="El cacomixtle de BARDO con sombrero de pluma y guitarra"
              width={1000}
              height={742}
            />
            <h2 className="bardo__name" id="bardo-title">
              BARDO <span>· Barra errante</span>
            </h2>
            <p className="script">Llevamos la barra a tu fiesta</p>
            <p className="bardo__body">
              La barra móvil de Relato: café, sodas, limonadas, canapés y postres preparados ahí mismo, en tu boda, cumpleaños o evento de
              oficina. Cuéntanos qué tienes en mente y te mandamos la cotización por WhatsApp.
            </p>
          </div>

          <form className="form" onSubmit={onSubmit} noValidate>
            <h3 className="form__title">Cotiza tu evento</h3>
            <p className="form__hint">Tarda un minuto. Al enviar se abre WhatsApp con tus datos listos.</p>

            <div className="field">
              <label htmlFor="nombre">Tu nombre</label>
              <input
                id="nombre"
                name="nombre"
                autoComplete="name"
                placeholder="¿Cómo te llamas?"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "nombre-error" : undefined}
                onChange={() => error && setError(null)}
              />
              {error && (
                <span className="field__error" id="nombre-error" role="alert">
                  {error}
                </span>
              )}
            </div>

            <div className="form__row">
              <div className="field">
                <label htmlFor="fecha">Fecha</label>
                <input id="fecha" name="fecha" type="date" />
              </div>
              <div className="field">
                <label htmlFor="invitados">Invitados</label>
                <input id="invitados" name="invitados" type="number" inputMode="numeric" min={1} placeholder="Ej. 60" />
              </div>
            </div>

            <fieldset className="field">
              <legend>Tipo de barra (elige una o varias)</legend>
              <div className="chips">
                {barras.map((b) => (
                  <label className="chip" key={b}>
                    <input
                      type="checkbox"
                      name="barra"
                      value={b}
                      checked={seleccion.includes(b)}
                      onChange={() => toggleBarra(b)}
                    />
                    <span>{b}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="field">
              <label htmlFor="lugar">Lugar (opcional)</label>
              <input id="lugar" name="lugar" placeholder="Colonia o salón" />
            </div>

            <button className="btn btn--caramelo" type="submit">
              Agenda tu evento
              <Arrow />
            </button>
          </form>
        </div>
      </div>
      <Wave color="var(--color-tinta)" variant={0} />
    </section>
  );
}

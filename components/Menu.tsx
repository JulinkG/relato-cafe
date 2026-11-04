"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { categorias, negocio, precio, waLink } from "@/lib/data";
import { WhatsApp } from "./Icons";

const corto: Record<string, string> = {
  "sodas-naturales": "Sodas",
  "aguas-frescas": "Aguas",
  "postres-y-extras": "Extras",
};

export function Menu() {
  const [active, setActive] = useState(categorias[0].id);
  const trackRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLUListElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Recorta la capa Grana a la pestaña activa: el "indicador" se desliza vía clip-path.
  const syncClip = useCallback(() => {
    const track = trackRef.current;
    const overlay = overlayRef.current;
    const tab = tabRefs.current[active];
    if (!track || !overlay || !tab) return;
    const left = tab.offsetLeft;
    const right = track.scrollWidth - (left + tab.offsetWidth);
    overlay.style.setProperty("--clip-l", `${left}px`);
    overlay.style.setProperty("--clip-r", `${right}px`);
  }, [active]);

  useLayoutEffect(() => {
    syncClip();
    const ro = new ResizeObserver(syncClip);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [syncClip]);

  const select = (id: string) => {
    setActive(id);
    tabRefs.current[id]?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  };

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = categorias[(i + dir + categorias.length) % categorias.length];
    select(next.id);
    tabRefs.current[next.id]?.focus();
  };

  const cat = categorias.find((c) => c.id === active)!;

  return (
    <section className="menu" id="menu" aria-labelledby="menu-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="heading" id="menu-title">
            La carta
          </h2>
          <p className="script">Elige tu capítulo de hoy</p>
        </div>

        <div className="tabs">
          <div className="tabs__track" ref={trackRef}>
            <ul className="tabs__list" role="tablist" aria-label="Categorías del menú">
              {categorias.map((c, i) => (
                <li key={c.id} role="presentation">
                  <button
                    ref={(el) => {
                      tabRefs.current[c.id] = el;
                    }}
                    className="tab"
                    role="tab"
                    id={`tab-${c.id}`}
                    aria-selected={c.id === active}
                    aria-controls="menu-panel"
                    tabIndex={c.id === active ? 0 : -1}
                    onClick={() => select(c.id)}
                    onKeyDown={(e) => onKey(e, i)}
                  >
                    {corto[c.id] ?? c.nombre}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="tabs__list tabs__list--overlay" ref={overlayRef} aria-hidden="true">
              {categorias.map((c) => (
                <li key={c.id}>
                  <span className="tab">{corto[c.id] ?? c.nombre}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="menu__panel" id="menu-panel" role="tabpanel" aria-labelledby={`tab-${cat.id}`}>
          <div className="menu__cat">
            <h3 className="label">{cat.nombre}</h3>
            <span className="menu__count">{cat.productos.length} opciones</span>
          </div>
          <ul className="menu__list" key={cat.id}>
            {cat.productos.map((p, i) => (
              <li className="item" key={p.nombre} style={{ "--i": i } as React.CSSProperties}>
                <div className="item__row">
                  <span className="item__name">{p.nombre}</span>
                  <span className="item__price">{precio(p.precio)}</span>
                </div>
                <p className="item__desc">{p.descripcion}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu__foot">
          <p className="menu__note">
            {negocio.servicio.detalle}
            <br />
            Precios en pesos mexicanos.
          </p>
          <a className="btn" href={waLink("Hola Relato, quiero hacer un pedido para llevar:")} target="_blank" rel="noopener">
            <WhatsApp />
            Haz tu pedido por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

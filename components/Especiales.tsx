"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { destacados, precio, waLink } from "@/lib/data";
import { Arrow, ArrowLeft } from "./Icons";
import { Wave } from "./Wave";

export function Especiales() {
  const ref = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * w, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="franja" id="especiales" aria-labelledby="especiales-title">
      <Wave color="var(--color-grana)" bg="var(--color-papel)" variant={0} />
      <div className="wrap franja__inner">
        <Image className="franja__sticker" src="/marca/soda.png" alt="" width={150} height={150} aria-hidden="true" />
        <div className="franja__head">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <h2 className="heading" id="especiales-title">
              Nuestros especiales
            </h2>
            <p className="script">Recetas de la casa, cada una con su historia</p>
          </div>
          <div className="carousel__ctrl">
            <button className="round" type="button" onClick={() => step(-1)} disabled={edge.start} aria-label="Especial anterior">
              <ArrowLeft />
            </button>
            <button className="round" type="button" onClick={() => step(1)} disabled={edge.end} aria-label="Siguiente especial">
              <Arrow className="" />
            </button>
          </div>
        </div>

        <ul className="carousel" ref={ref} aria-label="Especiales de la casa" style={{ listStyle: "none" }}>
          {destacados.map((p) => (
            <li className="card" key={p.nombre}>
              <span className="card__tag">Especial</span>
              <h3 className="card__name">{p.nombre}</h3>
              <p className="card__desc">{p.descripcion}</p>
              <div className="card__foot">
                <span className="card__price">{precio(p.precio)}</span>
                <a className="card__link" href={waLink(`Hola Relato, quiero pedir para llevar: ${p.nombre}.`)} target="_blank" rel="noopener">
                  Pedir
                  <Arrow className="" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Wave color="var(--color-papel)" variant={1} />
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Arrow, WhatsApp } from "./Icons";
import { waLink } from "@/lib/data";

const links = [
  { href: "/#menu", label: "Menú" },
  { href: "/#especiales", label: "Especiales" },
  { href: "/historias", label: "Historias" },
  { href: "/#bardo", label: "BARDO" },
  { href: "/#visitanos", label: "Visítanos" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav" data-open={open} data-scrolled={scrolled || open}>
      <div className="wrap nav__bar">
        <Logo />
        <nav aria-label="Principal">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn nav__cta" href={waLink("Hola Relato, quiero hacer un pedido.")} target="_blank" rel="noopener">
          <WhatsApp />
          Pide por WhatsApp
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-lines">
            <span />
            <span />
          </span>
        </button>
      </div>
      <div className="nav__sheet" id="menu-movil">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
        <a className="btn" href={waLink("Hola Relato, quiero hacer un pedido.")} target="_blank" rel="noopener">
          <WhatsApp />
          Pide por WhatsApp
        </a>
      </div>
    </header>
  );
}

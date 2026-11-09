"use client";

import { useEffect, useState } from "react";
import { negocio } from "@/lib/data";

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

function estado() {
  const parts = new Intl.DateTimeFormat("es-MX", {
    timeZone: negocio.horario.zonaHoraria,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value);
  const m = Number(parts.find((p) => p.type === "minute")?.value);
  const now = h * 60 + m;
  const abre = toMin(negocio.horario.abre);
  const cierra = toMin(negocio.horario.cierra);
  return now >= abre && now < cierra;
}

/** Abierto/cerrado según la hora de Oaxaca. Se calcula en el cliente para no desfasar la hidratación. */
export function OpenStatus({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(estado());
    const t = setInterval(() => setOpen(estado()), 60_000);
    return () => clearInterval(t);
  }, []);

  const { abre, cierra, proximamente } = negocio.horario;
  const text = proximamente
    ? "Próximamente"
    : open === null
      ? `De ${abre} a ${cierra}`
      : open
        ? `Abierto ahora · cerramos a las ${cierra}`
        : `Cerrado ahora · abrimos a las ${abre}`;

  return (
    <span className={className} aria-live="polite">
      <span className="dot" data-open={!proximamente && open === true} />
      {text}
    </span>
  );
}

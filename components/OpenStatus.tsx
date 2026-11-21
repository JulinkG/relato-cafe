"use client";

import { useEffect, useState } from "react";
import { negocio } from "@/lib/data";

const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const SEMANA = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

type Estado = { open: boolean; abreHoy: boolean; diaSiguiente: number; esManana: boolean };

/** Día (0 = domingo) y minuto del día en la hora de Oaxaca, sin importar la zona del visitante. */
function ahora() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: negocio.horario.zonaHoraria,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { dia: SEMANA.indexOf(get("weekday")), min: Number(get("hour")) * 60 + Number(get("minute")) };
}

function estado(): Estado {
  const { dia, min } = ahora();
  const { dias, abre, cierra } = negocio.horario;
  const diaAbierto = dias.includes(dia);

  // Próximo día (a partir de mañana) en que se abre
  let diaSiguiente = (dia + 1) % 7;
  for (let i = 0; i < 7 && !dias.includes(diaSiguiente); i++) diaSiguiente = (diaSiguiente + 1) % 7;

  return {
    open: diaAbierto && min >= toMin(abre) && min < toMin(cierra),
    abreHoy: diaAbierto && min < toMin(abre),
    diaSiguiente,
    esManana: diaSiguiente === (dia + 1) % 7,
  };
}

/** Abierto/cerrado según el día y la hora de Oaxaca. Se calcula en el cliente para no desfasar la hidratación. */
export function OpenStatus({ className = "" }: { className?: string }) {
  const [e, setE] = useState<Estado | null>(null);

  useEffect(() => {
    setE(estado());
    const t = setInterval(() => setE(estado()), 60_000);
    return () => clearInterval(t);
  }, []);

  const { abre, cierra, diasTexto, proximamente } = negocio.horario;
  const text = proximamente
    ? "Próximamente"
    : e === null
      ? `${diasTexto}, de ${abre} a ${cierra}`
      : e.open
        ? `Abierto ahora · cerramos a las ${cierra}`
        : e.abreHoy
          ? `Cerrado ahora · abrimos hoy a las ${abre}`
          : `Cerrado ahora · abrimos ${e.esManana ? "mañana" : `el ${DIAS[e.diaSiguiente]}`} a las ${abre}`;

  return (
    <span className={className} aria-live="polite">
      <span className="dot" data-open={!proximamente && e?.open === true} />
      {text}
    </span>
  );
}

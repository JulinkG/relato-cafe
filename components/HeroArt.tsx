"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Sticker } from "./Sticker";
import { siguienteCuentito, type Bebida } from "@/lib/cuentitos";

/**
 * Cacomixtle + stickers del hero. Si arrastras una bebida a su cara, se la toma y te cuenta un cuento corto.
 */
export function HeroArt() {
  const face = useRef<HTMLImageElement>(null);
  const [cuento, setCuento] = useState<{ texto: string; n: number } | null>(null);
  const [gulp, setGulp] = useState(0);

  const darDeTomar = (bebida: Bebida) => (c: { x: number; y: number }) => {
    const el = face.current;
    if (!el) return false;
    const r = el.getBoundingClientRect();
    // Zona generosa: el centro del sticker cae sobre la cara (sin contar el borde transparente).
    const dentro =
      c.x > r.left + r.width * 0.12 &&
      c.x < r.right - r.width * 0.12 &&
      c.y > r.top + r.height * 0.05 &&
      c.y < r.bottom;
    if (!dentro) return false;
    setGulp((g) => g + 1);
    setCuento((prev) => ({ texto: siguienteCuentito(bebida), n: (prev?.n ?? 0) + 1 }));
    return true;
  };

  return (
    <div className="hero__art">
      <Image
        ref={face}
        key={gulp}
        className={gulp ? "hero__face hero__face--gulp" : "hero__face reveal"}
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
        onDrop={darDeTomar("cafe")}
      />
      <Sticker
        src="/marca/soda.png"
        width={180}
        height={180}
        rotate={8}
        delay={640}
        style={{ right: "-10%", bottom: "-8%", width: "30%" }}
        onDrop={darDeTomar("soda")}
      />
      <Sticker
        src="/marca/flor.png"
        width={160}
        height={160}
        rotate={12}
        delay={760}
        style={{ right: "2%", top: "-6%", width: "20%" }}
        onDrop={darDeTomar("flor")}
      />
      <Sticker
        src="/marca/pan.png"
        width={180}
        height={180}
        rotate={-14}
        delay={880}
        style={{ left: "-16%", bottom: "-10%", width: "42%" }}
        onDrop={darDeTomar("pan")}
      />

      <div className="cuentito" aria-live="polite">
        {cuento && (
          <div className="cuentito__globo" key={cuento.n} role="status">
            <p>{cuento.texto}</p>
            <button type="button" className="cuentito__cerrar" onClick={() => setCuento(null)} aria-label="Cerrar cuento">
              ×
            </button>
          </div>
        )}
      </div>

      <p className="hero__hint">psst, despega un sticker y dale de tomar</p>
    </div>
  );
}

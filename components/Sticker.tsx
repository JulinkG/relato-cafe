"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  rotate: number;
  delay?: number;
  style?: React.CSSProperties;
  /**
   * Se llama al soltar el sticker con el punto donde quedó su centro.
   * Si devuelve true, el sticker se "bebe" (se encoge) y regresa a su lugar.
   */
  onDrop?: (center: { x: number; y: number }) => boolean;
};

const SIP_MS = 420;

/**
 * Dibujo de crayón suelto. Se "pega" al cargar y se puede despegar y mover con el dedo o el mouse.
 * El arrastre escribe directo al transform (sin re-render) para que siga al puntero sin retraso.
 */
export function Sticker({ src, width, height, rotate, delay = 300, style, onDrop }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const start = useRef({ px: 0, py: 0, x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [phase, setPhase] = useState<"idle" | "sip" | "back">("idle");

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || phase === "sip") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, x: pos.current.x, y: pos.current.y };
    setDragging(true);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !ref.current) return;
    const x = start.current.x + e.clientX - start.current.px;
    const y = start.current.y + e.clientY - start.current.py;
    pos.current = { x, y };
    ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    if (!dragging) return;
    setDragging(false);

    if (!onDrop || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if (!onDrop({ x: r.left + r.width / 2, y: r.top + r.height / 2 })) return;

    // Se lo toma: se encoge, y luego vuelve a pegarse en su sitio original.
    setPhase("sip");
    window.setTimeout(() => {
      pos.current = { x: 0, y: 0 };
      if (ref.current) ref.current.style.transform = "";
      setPhase("back");
    }, SIP_MS);
  };

  return (
    <div
      ref={ref}
      className="sticker"
      data-dragging={dragging}
      data-phase={phase}
      aria-hidden="true"
      style={style}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <div
        className="sticker__place"
        style={{ "--delay": `${delay}ms` } as React.CSSProperties}
        onAnimationEnd={(e) => e.animationName === "stick-back" && setPhase("idle")}
      >
        <Image
          className="sticker__img"
          src={src}
          alt=""
          width={width}
          height={height}
          draggable={false}
          style={{ "--r": `${rotate}deg` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

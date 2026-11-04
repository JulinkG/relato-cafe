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
};

/**
 * Dibujo de crayón suelto. Se "pega" al cargar y se puede despegar y mover con el dedo o el mouse.
 * El arrastre escribe directo al transform (sin re-render) para que siga al puntero sin retraso.
 */
export function Sticker({ src, width, height, rotate, delay = 300, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const start = useRef({ px: 0, py: 0, x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
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
    setDragging(false);
  };

  return (
    <div
      ref={ref}
      className="sticker"
      data-dragging={dragging}
      aria-hidden="true"
      style={style}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <div className="sticker__place" style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
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

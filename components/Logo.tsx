import Image from "next/image";

export function Logo({ href = "/#inicio" }: { href?: string }) {
  return (
    <a className="logo" href={href} aria-label="Relato café, inicio">
      <Image className="logo__face" src="/marca/cacomixtle.png" alt="" width={46} height={34} priority />
      <span className="logo__type" aria-hidden="true">
        <span className="logo__relato">Relato</span>
        <span className="logo__cafe">café</span>
      </span>
    </a>
  );
}

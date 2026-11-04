/** Divisor ondulado: relleno del color de la sección siguiente. */
export function Wave({
  color,
  bg,
  flip = false,
  variant = 0,
}: {
  color: string;
  bg?: string;
  flip?: boolean;
  variant?: 0 | 1 | 2;
}) {
  const paths = [
    "M0 60 C 180 10, 360 10, 540 46 S 900 96, 1080 52 S 1320 18, 1440 40 V 100 H 0 Z",
    "M0 44 C 220 92, 420 92, 640 52 S 1000 8, 1200 40 S 1380 70, 1440 58 V 100 H 0 Z",
    "M0 70 C 160 40, 300 22, 520 40 S 880 84, 1120 50 S 1360 26, 1440 30 V 100 H 0 Z",
  ];
  return (
    <svg className={`wave${flip ? " wave--flip" : ""}`} viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" style={bg ? { background: bg } : undefined}>
      <path d={paths[variant]} fill={color} />
    </svg>
  );
}

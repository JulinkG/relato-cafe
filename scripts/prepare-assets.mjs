// Prepara los dibujos de crayón de Relato: recorta el fondo blanco (flood fill desde los bordes)
// para que queden como stickers con su contorno claro sobre el Papel.
import sharp from "sharp";
import path from "node:path";

const SRC = process.argv[2] ?? "C:/Users/julin/Pictures/Relato_branding";
const OUT = "public/marca";

const crayons = [
  ["recursocafé.jpg", "cafe.png"],
  ["recursopata.jpg", "pata.png"],
  ["recursosoda.jpg", "soda.png"],
  ["recurso_flor.jpg", "flor.png"],
];

async function cutout(file, out) {
  const { data, info } = await sharp(path.join(SRC, file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const isBg = (i) => data[i] >= 250 && data[i + 1] >= 250 && data[i + 2] >= 250;
  const seen = new Uint8Array(w * h);
  const stack = [];
  for (let x = 0; x < w; x++) stack.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1);
  while (stack.length) {
    const p = stack.pop();
    if (seen[p]) continue;
    seen[p] = 1;
    if (!isBg(p * 4)) continue;
    data[p * 4 + 3] = 0;
    const x = p % w, y = (p / w) | 0;
    if (x > 0) stack.push(p - 1);
    if (x < w - 1) stack.push(p + 1);
    if (y > 0) stack.push(p - w);
    if (y < h - 1) stack.push(p + w);
  }
  // Suaviza el borde: píxeles opacos casi blancos que tocan transparencia quedan semitransparentes
  for (let p = 0; p < w * h; p++) {
    const i = p * 4;
    if (data[i + 3] === 0) continue;
    const x = p % w, y = (p / w) | 0;
    const near = [p - 1, p + 1, p - w, p + w].some((q) => q >= 0 && q < w * h && Math.abs((q % w) - x) <= 1 && data[q * 4 + 3] === 0);
    if (near) data[i + 3] = 140;
  }
  await sharp(data, { raw: { width: w, height: h, channels: 4 } }).trim().png({ compressionLevel: 9 }).toFile(path.join(OUT, out));
  console.log("ok", out);
}

for (const [f, o] of crayons) await cutout(f, o);
await sharp(path.join(SRC, "logo.png")).trim().png().toFile(path.join(OUT, "cacomixtle.png"));
await sharp(path.join(SRC, "Bardo_mascota.png")).resize({ width: 1000 }).png({ compressionLevel: 9 }).toFile(path.join(OUT, "bardo.png"));
console.log("ok logos");

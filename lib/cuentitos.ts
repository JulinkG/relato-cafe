/**
 * Cuentos cortitos que el cacomixtle cuenta cuando le das de tomar un sticker en el hero.
 * Cada bebida tiene varios; se van turnando para que no repita el mismo dos veces seguidas.
 */
export type Bebida = "cafe" | "soda" | "flor" | "pan";

export const cuentitos: Record<Bebida, string[]> = {
  cafe: [
    "Había una vez un búho que no podía dormir de día. Probó contar ovejas, contar estrellas y contar chistes malos. Nada. Una mañana le invitaron un espresso y por fin entendió: no era insomnio, era que nunca había estado despierto de verdad.",
    "Mi abuela decía que el café se tuesta escuchando. Que si le cuentas un secreto al grano mientras cruje, el secreto viaja en el aroma y llega a quien lo necesita. Por eso en Relato tostamos callados... casi siempre.",
    "Un martes llegó una nube a la barra. Pidió un americano, se sentó junto a la ventana y se quedó toda la tarde. Cuando se fue, dejó propina: un arcoíris chiquito encima de la máquina. Todavía brilla los martes.",
  ],
  soda: [
    "Las burbujas no saben que van a reventar. Suben felices, en fila, saludándose. Una vez le pregunté a una qué se sentía. Me dijo «¡plop!» y entendí que la respuesta estaba en el camino, no en la llegada.",
    "Una fresa quería ser famosa. Fue al circo, al teatro y a la tele, pero nadie la miraba. Un día se metió en una soda, se puso a girar entre el hielo y la gente dijo: «¡qué bonita!». A veces solo te falta el vaso correcto.",
    "En la colonia Reforma vive un limón que se cree naranja. Nadie lo corrige, porque es muy feliz. Cuando lo exprimimos para tus sodas, sale un poquito más dulce. Creo que la imaginación también tiene sabor.",
  ],
  pan: [
    "Había un pan que se levantaba antes que todos. Mientras la ciudad dormía, él ya estaba en el horno contándose chistes. Por eso sale tan esponjoso: el pan que se ríe, se infla. Y si te lo comes con café, el que se ríe eres tú.",
  ],
  flor: [
    "¡Achú! Eso no se toma, eso se huele. Pero ya que estamos: esta flor me la regaló una abeja a cambio de un cuento. Todavía le debo el final.",
    "Mmm... sabe a primavera y a papel. No es una bebida, pero te perdono. Mejor pásame un cafecito y te cuento algo bonito.",
  ],
};

const ultimo: Partial<Record<Bebida, number>> = {};

/** Elige un cuento al azar de esa bebida, sin repetir el anterior. */
export function siguienteCuentito(bebida: Bebida): string {
  const lista = cuentitos[bebida];
  let i = Math.floor(Math.random() * lista.length);
  if (lista.length > 1 && i === ultimo[bebida]) i = (i + 1) % lista.length;
  ultimo[bebida] = i;
  return lista[i];
}

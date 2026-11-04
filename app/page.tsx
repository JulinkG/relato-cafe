import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Especiales } from "@/components/Especiales";
import { Visita } from "@/components/Visita";
import { Bardo } from "@/components/Bardo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Especiales />
        <Visita />
        <Bardo />
      </main>
      <Footer />
    </>
  );
}

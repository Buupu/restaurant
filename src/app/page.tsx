import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Menu />
    </main>
  );
}

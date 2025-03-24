import Navigation from "@/components/Navigation";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import About from "@/components/About";
import Experiences from "@/components/Experiences";

export default async function Home() {
  return (
    <main>
      <Navigation />

      <Header />
      <Projects />
      <About />
      <Process />
      <Experiences />
    </main>
  );
}

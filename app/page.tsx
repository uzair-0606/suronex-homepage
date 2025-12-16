import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Howitworks from "@/components/Howitworks";
import Feature from "@/components/Feature";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <Howitworks />
      <Feature />
      <CTA />
    </main>
  );
}

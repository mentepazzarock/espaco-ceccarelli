import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Structure from "@/components/Structure";
import Gallery from "@/components/Gallery";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Structure />
        <Gallery />
        <CallToAction />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import { About } from "@/components/About";
import { Areas } from "@/components/Areas";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Prices } from "@/components/Prices";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TipsPreview } from "@/components/TipsPreview";
import { WhyUs } from "@/components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Prices />
        <About />
        <WhyUs />
        <Areas />
        <Reviews />
        <Booking />
        <TipsPreview />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Roles from "@/components/landing/Roles";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <Hero />
      <HowItWorks />
      <Roles />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

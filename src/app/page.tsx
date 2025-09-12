import HeroSection from "@/components/hero-section";
import ServiceCards from "@/components/service-cards";
import HowItWorks from "@/components/how-it-works";
import DriverBenefits from "@/components/driver-benefits";
import CitiesSection from "@/components/cities-section";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServiceCards />
      <HowItWorks />
      <DriverBenefits />
      <CitiesSection />
      <Footer />
    </main>
  );
}
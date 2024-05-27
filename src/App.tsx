import React from "react";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import ServiceSection from "./components/ServiceSection";
import FormSection from "./components/FormSection";
import FounderSection from "./components/FounderSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ServiceSection />
      <FormSection />
      <FounderSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

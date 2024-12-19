import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/hero/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { Calculator } from './components/Calculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <div className="bg-[#136fb7] text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              Beneficios de Abrir una Cuenta en YPF Quequén
            </h1>
          </div>
        </div>
        <section id="benefits">
          <BenefitsSection />
        </section>
        <section id="calculator">
          <Calculator />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { Services } from './components/Services';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechToolkit } from './components/TechToolkit';
import { WorkProcess } from './components/WorkProcess';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { Project, Service } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const scrollToSection = (id: string, focusInput = false) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (focusInput) {
        setTimeout(() => {
          const input = el.querySelector('input') as HTMLInputElement | null;
          if (input) input.focus();
        }, 600);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#09090D] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar onContactClick={() => scrollToSection('contact', true)} />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onViewWorkClick={() => scrollToSection('projects')}
          onConnectClick={() => scrollToSection('contact', true)}
        />

        {/* 2. Statistics Section */}
        <Statistics />

        {/* 3. What I Do / Services */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 4. Featured Projects */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Technology Toolkit */}
        <TechToolkit />

        {/* 6. My Work Process */}
        <WorkProcess />

        {/* 7. Let's Build Something Amazing Together CTA Banner */}
        <CtaBanner onGetInTouchClick={() => scrollToSection('contact', true)} />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Lightbox / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Service Scope Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={() => {
          setSelectedService(null);
          scrollToSection('contact', true);
        }}
      />
    </div>
  );
}

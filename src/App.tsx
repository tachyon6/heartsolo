import React from 'react';
import { Hero } from './components/Hero';
import { ProgramDetails } from './components/ProgramDetails';
import { LocationInfo } from './components/LocationInfo';
import { LessonInfo } from './components/LessonInfo';
import { PricingSection } from './components/PricingSection';
import { ImageGallery } from './components/ImageGallery';
import { AccommodationInfo } from './components/AccommodationInfo';
import { PreparationInfo } from './components/PreparationInfo';
import { Schedule } from './components/Schedule';
import { PartyInfo } from './components/PartyInfo';
import { Transportation } from './components/Transportation';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <ProgramDetails />
      <LocationInfo />
      <LessonInfo />
      <ImageGallery />
      <PricingSection />
      <AccommodationInfo />
      <PreparationInfo />
      <Schedule />
      <PartyInfo />
      <Transportation />
      <FAQ />
      <Footer />
    </div>
  );
}
import React from 'react';
import { Package, Backpack, PartyPopper } from 'lucide-react';
import { Section } from './layout/Section';
import { SectionTitle } from './ui/SectionTitle';
import { PricingCard } from './pricing/PricingCard';
import { PickupInfo } from './pricing/PickupInfo';

const packages = [
  {
    title: '올인클루시브',
    price: '240,000원',
    originalPrice: '280,000원',
    description: '모든 것이 포함된 패키지',
    icon: Package,
    isHighlighted: true,
    isEvent: true,
    features: [
      { name: '장비 렌탈 (스키/보드)', included: true },
      { name: '의류 렌탈', included: true },
      { name: '리프트권 (4시간)', included: true },
      { name: '무제한 바베큐 & 소주', included: true },
      { name: '숙박 (펜션)', included: true },
    ],
  },
  {
    title: '장비 개별 준비',
    price: '160,000원',
    description: '장비/의류 개별 준비 시',
    icon: Backpack,
    features: [
      { name: '장비 렌탈', included: false },
      { name: '의류 렌탈', included: false },
      { name: '리프트권 (4시간)', included: false },
      { name: '무제한 바베큐 & 소주', included: true },
      { name: '숙박 (펜션)', included: true },
    ],
  },
  {
    title: '파티 미참여',
    price: '100,000원',
    description: '파티/숙박 미포함',
    icon: PartyPopper,
    features: [
      { name: '장비 렌탈 (스키/보드)', included: true },
      { name: '의류 렌탈', included: true },
      { name: '리프트권 (4시간)', included: true },
      { name: '무제한 바베큐 & 소주', included: false },
      { name: '숙박 (펜션)', included: false },
    ],
  },
];

export function PricingSection() {
  return (
    <Section bgColor="white">
      <SectionTitle>패키지 요금</SectionTitle>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (
          <PricingCard key={index} {...pkg} />
        ))}
      </div>

      <PickupInfo />
    </Section>
  );
}
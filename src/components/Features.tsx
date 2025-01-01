import React from 'react';
import { PartyPopper, Snowflake, Beer } from 'lucide-react';
import { Section } from './layout/Section';
import { SectionTitle } from './ui/SectionTitle';

export function Features() {
  return (
    <Section bgColor="black">
      <SectionTitle textColor="white">패키지 특징</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all">
          <PartyPopper className="w-12 h-12 mb-6 text-orange-500" />
          <h3 className="text-xl font-bold mb-3 text-white">무제한 파티</h3>
          <p className="text-gray-400">바베큐와 소주가 무제한으로 제공되는 신나는 MT</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all">
          <Snowflake className="w-12 h-12 mb-6 text-blue-500" />
          <h3 className="text-xl font-bold mb-3 text-white">겨울 스포츠</h3>
          <p className="text-gray-400">낮에는 스키/보드를 즐기는 짜릿한 시간</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all">
          <Beer className="w-12 h-12 mb-6 text-yellow-500" />
          <h3 className="text-xl font-bold mb-3 text-white">남녀 함께하는 MT</h3>
          <p className="text-gray-400">새로운 인연과 함께하는 즐거운 추억</p>
        </div>
      </div>
    </Section>
  );
}
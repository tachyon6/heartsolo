import React from 'react';
import { Package, Check, Info } from 'lucide-react';
import { Section } from './layout/Section';
import { SectionTitle } from './ui/SectionTitle';

export function PreparationInfo() {
  const essentialItems = [
    { name: '비니 (모자)', description: '보온과 안전을 위해 필수' },
    { name: '장갑', description: '방수/방한 기능이 있는 장갑 권장' },
    { name: '두꺼운 양말', description: '스키/보드화 착용시 필요' },
    { name: '보호대', description: '안전을 위해 필수' },
  ];

  const providedItems = [
    '핫팩 무제한',
    '스키/보드 장비',
    '의류 렌탈',
  ];

  return (
    <Section bgColor="white">
      <SectionTitle>준비물 안내</SectionTitle>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">개별 준비물</h3>
          </div>
          
          <div className="space-y-4">
            {essentialItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Info className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">제공 물품</h3>
          </div>
          
          <div className="space-y-4">
            {providedItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/80 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="font-medium text-gray-900">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 leading-relaxed">
              모든 렌탈 장비는 매일 소독 처리되며, 
              <br />
              깨끗한 상태로 제공됩니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
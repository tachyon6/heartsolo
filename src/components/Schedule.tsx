import React from 'react';
import { Clock, Sun, Moon } from 'lucide-react';
import { Section } from './layout/Section';
import { SectionTitle } from './ui/SectionTitle';

export function Schedule() {
  return (
    <Section bgColor="gray">
      <SectionTitle>일정 안내</SectionTitle>
      
      <div className="max-w-4xl mx-auto">
        {/* Day 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Sun className="w-6 h-6 text-orange-500" />
            <h3 className="text-2xl font-bold text-gray-800">첫째 날</h3>
          </div>
          
          <div className="relative pl-8 space-y-6">
            <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="relative">
              <div className="absolute left-[-27px] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="font-semibold text-blue-600 mb-1">12:00</div>
                <div className="text-gray-700">집결</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[-27px] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="font-semibold text-blue-600 mb-1">13:00 - 17:00</div>
                <div className="text-gray-700">스키장 도착 및 강습/자유 시간</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[-27px] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="font-semibold text-blue-600 mb-1">18:00 - 20:00</div>
                <div className="text-gray-700">샤워 및 정비시간</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[-27px] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="font-semibold text-blue-600 mb-1">20:00 - 24:00</div>
                <div className="text-gray-700">모두가 모여 즐기는 파티 타임</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Day 2 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Moon className="w-6 h-6 text-indigo-500" />
            <h3 className="text-2xl font-bold text-gray-800">둘째 날</h3>
          </div>
          
          <div className="relative pl-8 space-y-6">
            <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="relative">
              <div className="absolute left-[-27px] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="font-semibold text-blue-600 mb-1">09:00</div>
                <div className="text-gray-700">기상 후 아침식사</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-[-27px] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="font-semibold text-blue-600 mb-1">11:00</div>
                <div className="text-gray-700">체크아웃</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
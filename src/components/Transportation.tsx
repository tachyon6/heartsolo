import React from 'react';
import { Car, Train, MapPin } from 'lucide-react';

export function Transportation() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">교통 안내</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Car className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold">자차 이용</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p>12시까지 집결</p>
                  <p>30대 이상 주차 가능</p>
                </div>
              </li>
              <li>• 13시 스키장 도착</li>
              <li>• 스키장 내 전용 주차구역 이용</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Train className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold">셔틀 서비스</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• 강변역 ↔ 스키장 ↔ 펜션 ↔ 강변역 (30,000원)</li>
              <li>• 서울 픽업 (10,000원)</li>
              <li className="text-sm text-blue-600 mt-2">* 편도/왕복 동일 요금</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
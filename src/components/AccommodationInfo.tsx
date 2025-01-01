import React from 'react';
import { Home, Users } from 'lucide-react';

export function AccommodationInfo() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">숙박 안내</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Home className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold">펜션 정보</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• 최대 40명 수용 가능한 대규모 펜션</li>
              <li>• 남성방/여성방 분리 운영</li>
              <li>• 취사 시설 완비</li>
              <li>• 넓은 공용 공간</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold">편의 시설</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li>• 노래방 시설 (무료)</li>
              <li>• 탁구장 (무료)</li>
              <li>• BBQ 시설</li>
              <li>• 주차장</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { UtensilsCrossed, Beer } from 'lucide-react';

export function PartyInfo() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">MT & 파티</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <UtensilsCrossed className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">바베큐 파티 (무제한)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 삼겹살 무제한</li>
                  <li>• 소시지 & 야채</li>
                  <li>• 공기밥 무제한</li>
                  <li>• 음료수 무제한</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Beer className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">실내 파티 (무제한)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 소주 무제한</li>
                  <li>• 간식 제공</li>
                  <li>• 게임 & 노래방</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">파티 일정</h3>
            <ul className="space-y-6">
              <li>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">20:00~22:00</span>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">무제한 바베큐 파티</p>
                  <p className="text-sm text-blue-700 mt-1">맛있는 고기와 함께하는 즐거운 시간</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">22:00~24:00</span>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">실내 파티</p>
                  <p className="text-sm text-blue-700 mt-1">게임과 노래방으로 즐기는 파티</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                * 디제잉 파티는 특별 이벤트로 진행되며, 일정은 별도 공지됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Bus } from 'lucide-react';

export function PickupInfo() {
  return (
    <div className="mt-12 max-w-2xl mx-auto bg-gray-50 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Bus className="w-6 h-6 text-blue-600" />
        <h3 className="font-semibold">픽업 서비스</h3>
      </div>
      <div className="space-y-3">
        <p className="text-gray-600">
          • 서울에서 픽업 (10,000원)
        </p>
        <p className="text-gray-600">
          • 강변역 출발 → 강촌 스키장 도착 셔틀 (30,000원)
        </p>
      </div>
    </div>
  );
}
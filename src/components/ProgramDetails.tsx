import React from 'react';
import { Snowflake, Clock } from 'lucide-react';

export function ProgramDetails() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">프로그램 특징</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Snowflake className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">전문 강습 진행</h3>
                <p className="text-gray-600">스키 상급자와 보드 전문가가 함께하는 1시간 단체 강습으로, 기초부터 차근차근 배울 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4시간 자유 이용</h3>
                <p className="text-gray-600">13시부터 17시까지 충분한 시간 동안 배운 내용을 실습하고 즐길 수 있습니다.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">패키지 포함 사항</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>장비 렌탈 (스키/보드)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>의류 렌탈</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>리프트권 (4시간)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>바비큐 파티</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>숙박 (펜션)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>아침 식사</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">픽업 서비스 이용시 추가 요금 10,000원이 발생합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
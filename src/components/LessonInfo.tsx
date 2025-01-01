import React from 'react';
import { GraduationCap, Users } from 'lucide-react';

export function LessonInfo() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">강습 안내</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-4">실력별 조 편성</h3>
                <ul className="space-y-4 text-gray-600">
                  <li>• 실력에 맞게 남2여2 조편성</li>
                  <li>• 초급/중급/상급 레벨별 구성</li>
                  <li>• 편안한 분위기의 강습</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-4">초보자 전용 무료 강습</h3>
                <ul className="space-y-4 text-gray-600">
                  <li>• 스키/보드 1시간 무료 강습</li>
                  <li>• 초보자 눈높이 맞춤</li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    * 초보자에 한해 제공되는 무료 강습입니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export function FAQ() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">자주 묻는 질문</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Q: 참가 연령대가 어떻게 되나요?</h3>
              <p className="text-gray-600">A: 20-35세 사이이며, 비슷한 또래끼리 조를 구성해 드립니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Q: 혼자 참여해도 될까요?</h3>
              <p className="text-gray-600">A: 네! 참가자의 50% 이상이 혼자 오시는 분들입니다. 모두가 함께 어울릴 수 있는 프로그램으로 구성되어 있습니다.</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Q: 초보자도 참여 가능한가요?</h3>
              <p className="text-gray-600">A: 네! 초보자를 위한 1시간 무료 강습이 제공되며, 실력에 맞게 남2여2 조편성으로 진행됩니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Q: 예약은 어떻게 하나요?</h3>
              <p className="text-gray-600">A: 100% 선결제로 운영되며, 예약 시 이름, 성별, 나이, 전화번호, 키, 발 사이즈, 스키/보드 선택, 경력사항을 알려주셔야 합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
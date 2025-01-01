import React from 'react';
import { Music2, TableTennis, Beer, Home, Users2, UtensilsCrossed } from 'lucide-react';
import { Section } from './layout/Section';
import { SectionTitle } from './ui/SectionTitle';

interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FacilityCard({ icon, title, description }: FacilityCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
          <div className="text-blue-500 group-hover:text-white transition-colors">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Facilities() {
  const facilities = [
    {
      icon: <Home className="w-6 h-6" />,
      title: '숙소 구성',
      description: '큰방 1개, 작은방 2개, 화장실 2개, 넓은 거실 구비',
    },
    {
      icon: <Music2 className="w-6 h-6" />,
      title: '노래방',
      description: '무료 이용 가능한 전문 노래방 시설',
    },
    {
      icon: <TableTennis className="w-6 h-6" />,
      title: '탁구장',
      description: '무료 이용 가능한 실내 탁구장',
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: '취사 시설',
      description: '조리도구 및 식기류 완비',
    },
    {
      icon: <Beer className="w-6 h-6" />,
      title: '주류',
      description: '소주 무제한 제공 (맥주 별도 구매)',
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: '공용 공간',
      description: '단체 활동이 가능한 넓은 공용 공간',
    },
  ];

  return (
    <Section bgColor="gray">
      <SectionTitle>펜션 시설</SectionTitle>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">추가 정보</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span>전 객실 정기 소독 및 청소</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span>24시간 온수 사용 가능</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span>주차 공간 완비</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
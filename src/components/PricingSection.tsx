import React from "react";
import { Package, PartyPopper, Plus } from "lucide-react";
import { Section } from "./layout/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { PricingCard } from "./pricing/PricingCard";
import { PickupInfo } from "./pricing/PickupInfo";

const packages = [
    {
        title: "올인클루시브",
        price: "160,000원",
        originalPrice: "200,000원",
        description: "숙박과 파티가 포함된 패키지",
        icon: Package,
        isHighlighted: true,
        isEvent: true,
        features: [
            { name: "무제한 바베큐 & 소주", included: true },
            { name: "숙박 (펜션)", included: true },
            { name: "초보자 강습 무료 제공", included: true },
        ],
        discounts: [
            { name: "친구 동반 할인", amount: "20,000원" },
            { name: "대학생 할인", amount: "20,000원" },
            { name: "군인 할인", amount: "20,000원" },
        ],
    },
    {
        title: "파티 미참여",
        price: "100,000원",
        description: "파티/숙박 미포함",
        icon: PartyPopper,
        features: [
            { name: "무제한 바베큐 & 소주", included: false },
            { name: "숙박 (펜션)", included: false },
        ],
        discounts: [
            { name: "친구 동반 할인", amount: "20,000원" },
            { name: "대학생 할인", amount: "20,000원" },
            { name: "군인 할인", amount: "20,000원" },
        ],
    },
];

const additionalOptions = {
    title: "추가 옵션",
    description: "필요한 항목만 선택",
    icon: Plus,
    items: [
        { name: "장비 렌탈 (스키/보드)", price: "15,000원" },
        { name: "의류 렌탈", price: "10,000원" },
        { name: "리프트권 (4시간)", price: "45,000원" },
    ],
};

export function PricingSection() {
    return (
        <Section bgColor='white'>
            <SectionTitle>패키지 요금</SectionTitle>

            <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                {packages.map((pkg, index) => (
                    <PricingCard key={index} {...pkg} />
                ))}
            </div>

            <div className='mt-12 max-w-5xl mx-auto'>
                <div className='bg-gray-50 rounded-lg p-6'>
                    <div className='flex items-center gap-3 mb-4'>
                        <Plus className='w-6 h-6 text-blue-600' />
                        <h3 className='text-xl font-semibold'>{additionalOptions.title}</h3>
                    </div>
                    <p className='text-gray-600 mb-6'>{additionalOptions.description}</p>
                    <div className='space-y-3'>
                        {additionalOptions.items.map((item, index) => (
                            <div
                                key={index}
                                className='flex items-center justify-between bg-white p-4 rounded-lg shadow-sm'
                            >
                                <span className='font-medium'>{item.name}</span>
                                <span className='text-blue-600 font-semibold'>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <PickupInfo />
        </Section>
    );
}

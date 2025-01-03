import React from "react";
import { LucideIcon, Sparkles } from "lucide-react";

interface PricingFeature {
    name: string;
    included: boolean;
}

interface Discount {
    name: string;
    amount: string;
}

interface PricingCardProps {
    title: string;
    price: string;
    originalPrice?: string;
    description: string;
    features: PricingFeature[];
    icon: LucideIcon;
    isHighlighted?: boolean;
    isEvent?: boolean;
    discounts?: Discount[];
}

export function PricingCard({
    title,
    price,
    originalPrice,
    description,
    features,
    icon: Icon,
    isHighlighted = false,
    isEvent = false,
    discounts = [],
}: PricingCardProps) {
    return (
        <div
            className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                isHighlighted ? "border-2 border-orange-500" : "border border-gray-200"
            }`}
        >
            {isHighlighted && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                        BEST
                    </span>
                </div>
            )}

            <div className='text-center mb-6'>
                <Icon className={`w-12 h-12 mx-auto mb-4 ${isHighlighted ? "text-orange-500" : "text-gray-600"}`} />
                <h3 className='text-xl font-bold mb-2'>{title}</h3>

                {isEvent ? (
                    <div className='space-y-1'>
                        <div className='flex items-center justify-center gap-1 text-sm text-orange-500 font-semibold'>
                            <Sparkles className='w-4 h-4' />
                            <span>새해 특가 이벤트</span>
                            <Sparkles className='w-4 h-4' />
                        </div>
                        <p className='text-sm text-gray-500'>
                            정상가 <span className='line-through'>{originalPrice}</span>
                        </p>
                        <div className='text-3xl font-bold text-orange-600'>{price}</div>
                        <p className='text-xs text-orange-500'>선착순 20명 한정</p>
                    </div>
                ) : (
                    <>
                        <div
                            className={`text-3xl font-bold mb-2 ${isHighlighted ? "text-orange-600" : "text-gray-800"}`}
                        >
                            {price}
                        </div>
                        <p className='text-gray-500 text-sm'>{description}</p>
                    </>
                )}
            </div>

            <ul className='space-y-3 mb-6'>
                {features.map((feature, index) => (
                    <li key={index} className={`flex items-center gap-2 ${feature.included ? "" : "text-gray-400"}`}>
                        <span
                            className={`w-2 h-2 rounded-full ${
                                feature.included ? (isHighlighted ? "bg-orange-500" : "bg-gray-600") : "bg-gray-400"
                            }`}
                        ></span>
                        <span className={feature.included ? "" : "line-through"}>{feature.name}</span>
                    </li>
                ))}
            </ul>

            {discounts && discounts.length > 0 && (
                <div className='mt-4 pt-4 border-t border-gray-100'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>할인 혜택</p>
                    <ul className='space-y-2'>
                        {discounts.map((discount, index) => (
                            <li key={index} className='flex items-center justify-between text-sm'>
                                <span className='text-gray-600'>{discount.name}</span>
                                <span className='text-orange-500 font-medium'>-{discount.amount}</span>
                            </li>
                        ))}
                    </ul>
                    <p className='text-xs text-gray-500 mt-2'>* 중복 할인 불가</p>
                </div>
            )}
        </div>
    );
}

import React from "react";
import { Sparkles } from "lucide-react";

export function EventBanner() {
    return (
        <div className='mb-12 max-w-3xl mx-auto'>
            <div className='bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-1'>
                <div className='bg-black rounded-xl p-6 text-center'>
                    <div className='flex items-center justify-center gap-2 mb-3'>
                        <Sparkles className='w-5 h-5 text-yellow-500' />
                        <h3 className='text-lg font-bold text-white'>새해 특가 이벤트</h3>
                        <Sparkles className='w-5 h-5 text-yellow-500' />
                    </div>

                    <div className='space-y-2'>
                        <p className='text-gray-300'>
                            정상가 <span className='line-through text-gray-500'>200,000원</span>
                        </p>
                        <p className='text-2xl font-bold text-white'>⚡️ 특가 160,000원</p>
                        <p className='text-sm text-orange-300'>선착순 20명 한정 | 조기 마감될 수 있습니다</p>
                        <p className='text-xs text-gray-400 mt-2'>
                            * 장비, 의류, 리프트권은 추가 옵션으로 구매 가능합니다
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

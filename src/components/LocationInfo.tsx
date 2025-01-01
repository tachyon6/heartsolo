import React from "react";
import { MapPin } from "lucide-react";
import { Section } from "./layout/Section";
import { SectionTitle } from "./ui/SectionTitle";

export function LocationInfo() {
    return (
        <Section>
            <SectionTitle>위치 안내</SectionTitle>
            <div className='bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto'>
                <div className='flex items-start gap-4 mb-8'>
                    <MapPin className='w-8 h-8 text-blue-600 flex-shrink-0' />
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>엘리시안 강촌</h3>
                        <p className='text-gray-600 mb-4'>최고의 시설과 접근성을 자랑하는 스키장</p>
                        <div className='bg-yellow-50 p-4 rounded-lg'>
                            <p className='text-sm text-yellow-800'>
                                * 펜션 위치는 안전상의 이유로 예약 확정자에게만 별도 공지됩니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-lg overflow-hidden shadow-lg'>
                        <img
                            src='https://myquark-image-label.s3.ap-northeast-2.amazonaws.com/boltlab/heartsolo/KakaoTalk_Image_2025-01-01-01-34-39_001.jpeg'
                            alt='펜션 위치 안내 1'
                            className='w-full h-auto object-cover'
                        />
                    </div>
                    <div className='rounded-lg overflow-hidden shadow-lg'>
                        <img
                            src='https://myquark-image-label.s3.ap-northeast-2.amazonaws.com/boltlab/heartsolo/KakaoTalk_Image_2025-01-01-01-34-39_002.jpeg'
                            alt='펜션 위치 안내 2'
                            className='w-full h-auto object-cover'
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}

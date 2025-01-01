import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Images Container - Always horizontal split */}
      <div className="absolute inset-0 flex flex-row">
        {/* Left side - Skier */}
        <div className="relative w-1/2 h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://myquark-image-label.s3.ap-northeast-2.amazonaws.com/boltlab/heartsolo/KakaoTalk_Photo_2025-01-01-19-34-21+003.jpeg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/70"></div>
          </div>
        </div>

        {/* Right side - Party */}
        <div className="relative w-1/2 h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://myquark-image-label.s3.ap-northeast-2.amazonaws.com/boltlab/heartsolo/KakaoTalk_Photo_2025-01-01-19-34-21+002.jpeg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-600">
              하트솔로
            </h1>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-4xl font-extralight mb-6 tracking-wide leading-relaxed">
            낮에는 스키/보드 타고
            <br />
            <span className="font-medium">밤에는 무제한 바베큐 술파티</span>
          </p>
          
          <p className="text-base md:text-xl font-light mb-8 md:mb-12 text-orange-200">
            매주 토-일 1박 2일 | 엘리시안 강촌
          </p>
          
          <div className="space-y-4 md:space-y-6">
            <button className="w-full md:w-auto bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium hover:from-orange-700 hover:to-red-600 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/30">
              지금 예약하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm font-light">
              문의: <a href="tel:010-2051-4228" className="text-orange-300 hover:text-orange-200 transition-colors">010-2051-4228</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/20 rounded-full relative">
          <div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-red-500 rounded-full absolute top-0 animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}
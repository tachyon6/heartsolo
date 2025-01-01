import React from 'react';
import { Section } from './layout/Section';
import { SectionTitle } from './ui/SectionTitle';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

function ImageCard({ src, alt, title, description }: ImageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function ImageGallery() {
  const images = [
    {
      src: "https://myquark-image-label.s3.ap-northeast-2.amazonaws.com/boltlab/heartsolo/KakaoTalk_Photo_2025-01-01-19-34-20+001.jpeg",
      alt: "게스트하우스 파티",
      title: "신나는 파티",
      description: "새로운 인연과 함께하는 즐거운 시간",
    },
    {
      src: "https://myquark-image-label.s3.ap-northeast-2.amazonaws.com/boltlab/heartsolo/KakaoTalk_Photo_2025-01-01-19-34-21+004.jpeg",
      alt: "스키/보드",
      title: "스키/보드",
      description: "낮에는 짜릿한 겨울 스포츠",
    },
    {
      src: "https://myquark-image-label.s3.ap-northeast-2.amazonaws.com/boltlab/heartsolo/KakaoTalk_Photo_2025-01-01-19-34-21+005.jpeg",
      alt: "바베큐 파티",
      title: "바베큐 파티",
      description: "맛있는 음식과 함께하는 무제한 파티",
    },
  ];

  return (
    <Section bgColor="white">
      <SectionTitle>즐거운 순간들</SectionTitle>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </div>
    </Section>
  );
}
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray';
}

export function Section({ children, className = '', bgColor = 'white' }: SectionProps) {
  return (
    <div className={`py-20 ${bgColor === 'white' ? 'bg-white' : 'bg-gray-50'} ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
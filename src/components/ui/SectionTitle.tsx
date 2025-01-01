import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  textColor?: 'black' | 'white';
}

export function SectionTitle({ children, textColor = 'black' }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-4xl font-bold tracking-tight ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
        {children}
      </h2>
      <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
    </div>
  );
}
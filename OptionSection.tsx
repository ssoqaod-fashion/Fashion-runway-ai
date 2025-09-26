
import React from 'react';

interface OptionSectionProps {
  title: string;
  children: React.ReactNode;
}

const OptionSection: React.FC<OptionSectionProps> = ({ title, children }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white">
      <h3 className="text-md font-bold text-pink-600 mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
};

export default OptionSection;

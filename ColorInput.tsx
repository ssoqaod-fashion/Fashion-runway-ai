
import React from 'react';

interface ColorInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-1">
        <input
          type="color"
          value={value}
          onChange={onChange}
          className="w-8 h-8 rounded-md border-none cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full text-left border-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default ColorInput;


import React from 'react';
import { DesignOptions } from '../types';
import {
  FABRIC_OPTIONS, BODY_TYPE_OPTIONS, BACKGROUND_OPTIONS, LIGHTING_OPTIONS,
  TOP_STYLE_OPTIONS, SLEEVE_STYLE_OPTIONS, TOP_EMBELLISHMENT_OPTIONS,
  BOTTOM_STYLE_OPTIONS, BOTTOM_LENGTH_OPTIONS, BOTTOM_FEATURE_OPTIONS
} from '../constants';
import OptionSection from './OptionSection';
import SelectInput from './SelectInput';
import ColorInput from './ColorInput';

interface OptionsPanelProps {
  options: DesignOptions;
  setOptions: React.Dispatch<React.SetStateAction<DesignOptions>>;
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({ options, setOptions }) => {
  const handleChange = (key: keyof DesignOptions, value: string | boolean) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed border-gray-300 space-y-6">
      <h2 className="text-xl font-bold text-purple-700 text-center">2. حدد التفاصيل</h2>
      
      <OptionSection title="خيارات أساسية">
        <SelectInput label="نوع القماش" value={options.fabric} onChange={e => handleChange('fabric', e.target.value)} options={FABRIC_OPTIONS} />
        <SelectInput label="شكل الجسم/الموديل" value={options.bodyType} onChange={e => handleChange('bodyType', e.target.value)} options={BODY_TYPE_OPTIONS} />
        <SelectInput label="الخلفية" value={options.background} onChange={e => handleChange('background', e.target.value)} options={BACKGROUND_OPTIONS} />
        <SelectInput label="الإضاءة" value={options.lighting} onChange={e => handleChange('lighting', e.target.value)} options={LIGHTING_OPTIONS} />
        <ColorInput label="اختيار اللون" value={options.color} onChange={e => handleChange('color', e.target.value)} />
      </OptionSection>
      
      <OptionSection title="الجزء العلوي (Top Section)">
        <SelectInput label="نوع القصة" value={options.topStyle} onChange={e => handleChange('topStyle', e.target.value)} options={TOP_STYLE_OPTIONS} />
        <SelectInput label="الأكمام" value={options.sleeveStyle} onChange={e => handleChange('sleeveStyle', e.target.value)} options={SLEEVE_STYLE_OPTIONS} />
        <SelectInput label="الزينة" value={options.topEmbellishment} onChange={e => handleChange('topEmbellishment', e.target.value)} options={TOP_EMBELLISHMENT_OPTIONS} />
      </OptionSection>
      
      <OptionSection title="الجزء السفلي (Bottom Section)">
        <SelectInput label="القصة" value={options.bottomStyle} onChange={e => handleChange('bottomStyle', e.target.value)} options={BOTTOM_STYLE_OPTIONS} />
        <SelectInput label="الطول" value={options.bottomLength} onChange={e => handleChange('bottomLength', e.target.value)} options={BOTTOM_LENGTH_OPTIONS} />
        <SelectInput label="إضافات" value={options.bottomFeature} onChange={e => handleChange('bottomFeature', e.target.value)} options={BOTTOM_FEATURE_OPTIONS} />
      </OptionSection>
      
      <OptionSection title="خيارات إضافية">
         <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="closeUp"
              checked={options.closeUp}
              onChange={e => handleChange('closeUp', e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
            />
            <label htmlFor="closeUp" className="text-sm font-medium text-gray-700">
              عرض صورة مقربة (Close-up) للتفاصيل
            </label>
        </div>
      </OptionSection>
    </div>
  );
};

export default OptionsPanel;


import React from 'react';
import Loader from './Loader';

interface ResultDisplayProps {
  isLoading: boolean;
  error: string | null;
  generatedImage: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ isLoading, error, generatedImage }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 min-h-[512px] flex items-center justify-center shadow-inner">
      {isLoading && <Loader />}
      {error && !isLoading && (
        <div className="text-center text-red-500">
          <p className="font-bold">حدث خطأ</p>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && !error && generatedImage && (
        <img src={generatedImage} alt="Generated Design" className="rounded-lg max-w-full max-h-full object-contain" />
      )}
      {!isLoading && !error && !generatedImage && (
        <div className="text-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">النتيجة ستظهر هنا</h3>
          <p className="mt-1 text-sm text-gray-500">ارفع رسمًا، اختر خياراتك، ثم اضغط على زر التحويل.</p>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;

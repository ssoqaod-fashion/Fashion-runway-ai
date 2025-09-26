
import React, { useRef, useState, DragEvent, ChangeEvent } from 'react';

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  preview: string | null;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, preview }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed border-gray-300 text-center transition-all duration-300">
      <h2 className="text-xl font-bold text-purple-700 mb-4">1. ارفع تصميمك</h2>
      <div
        className={`relative flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer transition-colors duration-300 ${
          isDragging ? 'bg-purple-100 border-purple-400' : 'bg-white hover:bg-gray-50'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {preview ? (
          <img src={preview} alt="معاينة الرسم" className="h-full w-full object-contain rounded-lg" />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">اضغط للرفع</span> أو اسحب وأفلت الصورة هنا</p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
          </div>
        )}
        <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileSelect}/>
      </div>
    </div>
  );
};

export default FileUpload;


import React from 'react';

const Footer: React.FC = () => (
  <footer className="text-center py-6 mt-12 border-t border-gray-200">
    <p className="text-gray-500">
      تم إنشاؤه بواسطة الذكاء الاصطناعي | محترف تصميم الأزياء &copy; {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;

import React from 'react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Brain className="w-8 h-8 text-blue-900 mr-2" />
          <span className="text-xl font-bold text-blue-900">Futurion Partners</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-blue-900 hover:text-green-500">Services</a></li>
            <li><a href="#success-stories" className="text-blue-900 hover:text-green-500">Success Stories</a></li>
            <li><a href="#blog" className="text-blue-900 hover:text-green-500">Blog</a></li>
            <li><a href="#contact" className="text-blue-900 hover:text-green-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
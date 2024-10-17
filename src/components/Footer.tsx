import React from 'react';
import { Brain, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">Futurion Partners</span>
            </div>
            <p className="text-sm">Transforming businesses with intelligent AI solutions</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-green-500">Services</a></li>
              <li><a href="#success-stories" className="hover:text-green-500">Success Stories</a></li>
              <li><a href="#blog" className="hover:text-green-500">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">123 AI Street, Tech City, 12345</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@futurionpartners.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500"><Linkedin /></a>
              <a href="#" className="hover:text-green-500"><Twitter /></a>
              <a href="#" className="hover:text-green-500"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm">
          <p>&copy; 2024 Futurion Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
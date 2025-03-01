import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-indigo-400" />
                <a href="mailto:hello@example.com" className="hover:text-indigo-400 transition-colors">
                  iamabhijitsarkar2000@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-indigo-400" />
                <span>Bangalore</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Abhijit Sarkar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <div className="inline-flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm text-gray-400">Available for freelance work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
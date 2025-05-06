import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Social Links - Left Side */}
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/abhijit-sarkar-05a213238/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/AbhijitS1000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com/AbhijitSaarkar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
            <a href="#skills" className="text-gray-800 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Skills</a>
            <a href="#projects" className="text-gray-800 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Projects</a>
          </div>

          {/* Profile Photo - Right Side */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-[2px]">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                {/* Replace with your profile photo */}
                <img 
                  src="myimg.jpg" 
                  alt="Profile" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
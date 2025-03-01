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
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com" 
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
                  src="https://instagram.fblr20-2.fna.fbcdn.net/v/t51.2885-19/466567538_2050180065397362_350441760601605563_n.jpg?_nc_ht=instagram.fblr20-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AEeE2zeslLJO-Pm2PP6H83G4lWGwc-z6JRI-nYIpJCt-mFovJ74yqtvbXJ3vSc38gY&_nc_ohc=pdh2T8yrBDUQ7kNvgEWZMbY&_nc_gid=ce606afbd84842d997c766bac8758bf9&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBNOZ7t5mwiFE16-jHAsGACZ5DZnloHbhyHO0hKDzgyGQ&oe=67C91A7D&_nc_sid=7d3ac5" 
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
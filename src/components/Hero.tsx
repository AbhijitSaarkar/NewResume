import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Abhijit Sarkar</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
          Always Ready,Passionate About Progress, Dedicated to Delivery
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
          I thrive on building relationships and leveraging technology to solve real-world problems.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-full p-2 shadow-xl">
              <img 
                src="https://instagram.fblr20-2.fna.fbcdn.net/v/t51.2885-19/466567538_2050180065397362_350441760601605563_n.jpg?_nc_ht=instagram.fblr20-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AEeE2zeslLJO-Pm2PP6H83G4lWGwc-z6JRI-nYIpJCt-mFovJ74yqtvbXJ3vSc38gY&_nc_ohc=pdh2T8yrBDUQ7kNvgEWZMbY&_nc_gid=ce606afbd84842d997c766bac8758bf9&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBNOZ7t5mwiFE16-jHAsGACZ5DZnloHbhyHO0hKDzgyGQ&oe=67C91A7D&_nc_sid=7d3ac5" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
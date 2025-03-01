import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering and cart functionality.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Redux', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for creative professionals.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects with team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Firebase'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
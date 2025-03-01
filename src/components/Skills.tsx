import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 80 },
    { name: 'JavaScript', level: 65 },
    { name: 'React', level: 55 },
    { name: 'TypeScript', level: 10 },
    { name: 'Tailwind CSS', level: 65 },
    { name: 'UI/UX Design', level: 55 },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-2"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
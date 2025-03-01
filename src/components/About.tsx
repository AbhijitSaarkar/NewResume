import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-2"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-6">
        I excel at understanding and addressing customer needs, turning them into impactful,tailor-made solutions.
        </p>
        <p className="text-gray-600 mb-6">
        With a sharp eye for detail and a commitment to excellence, I’m driven to provide unwavering support that goes beyond expectations. 
        My goal is to deliver results that not only meet but exceed customer satisfaction, building trust and showcasing value in a way that feels genuine and approachable.

        </p>
        <p className="text-gray-600">
          In my free time, you can find me hiking, reading, or experimenting 
          with new recipes in the kitchen.
        </p>
      </div>
    </section>
  );
};

export default About;
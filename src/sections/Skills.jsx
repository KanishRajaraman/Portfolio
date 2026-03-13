import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Skills = () => {
  const skills = [
    { category: "Languages", items: ["Python", "SQL", "C++"] },
    { category: "Frameworks/Web", items: ["React", "Node.js", "HTML/CSS"] },
    { category: "AI & Robotics", items: ["TensorFlow", "Scikit-Learn", "Pytorch", "ROS 2"] },
    { category: "Tools", items: ["Git", "Raspberry pi", "MongoDB", "Arduino"] }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Technical Expertise" subtitle="A collection of tools and technologies I use to bring ideas to life." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">{skillGroup.category}</h4>
              <ul className="space-y-2">
                {skillGroup.items.map(item => (
                  <li key={item} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
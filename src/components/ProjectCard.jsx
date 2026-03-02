import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      <div className="flex-1">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-4">{project.title}</h3>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div className="mt-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        <a href={project.link} className="text-blue-600 font-bold text-sm flex items-center group">
          Explore Project 
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
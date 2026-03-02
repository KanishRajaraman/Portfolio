import React from 'react';
import { projectData } from '../data/projects';

const Projects = () => {
  return (
    <section className="py-24 px-6 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-500 mt-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <button className="mt-8 text-sm font-bold flex items-center gap-2 text-blue-600 hover:gap-4 transition-all">
                View Details <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
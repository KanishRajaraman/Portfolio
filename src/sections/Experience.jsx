import React from 'react';
import { experienceData } from '../data/experience';
import SectionTitle from '../components/SectionTitle';

const Experience = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="My Journey" 
          subtitle="A timeline of my History." 
        />

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* The Horizontal Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>

          {/* Scrollable Wrapper */}
          <div className="flex overflow-x-auto pb-12 gap-8 scrollbar-hide snap-x">
            {experienceData.map((exp, index) => (
              <div 
                key={exp.id} 
                className="min-w-75 md:min-w-87.5 snap-center relative group"
              >
                {/* Date Node */}
                <div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-150 transition-transform"></div>
                
                {/* Content Card */}
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300 md:mt-10">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-900/60 font-medium text-sm mt-1">
                    {exp.organization}
                  </p>
                  <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
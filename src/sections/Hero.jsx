import React from 'react';

const Hero = () => {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Download CV from assets
    const cvPath = '/src/assets/Resume.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-50 via-white to-white">
      <div className="max-w-4xl text-center space-y-8">
        
        {/* NCC Badge / Small Tag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest animate-fade-in">
          AI Developer and Problem Solver
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Engineering <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">Intelligence</span> with Precision.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I am a dedicated AI & Data Science student with a passion for building intelligent solutions. As a 
          <span className="text-gray-900 font-medium"> detail-oriented problem-solver</span> focus on using technology to create a positive, sustainable impact on the community.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={handleViewProjects} className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-gray-200">
            View Projects
          </button>
          <button onClick={handleDownloadCV} className="w-full sm:w-auto px-10 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
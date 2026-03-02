import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h2>
      <div className="h-1.5 w-16 bg-blue-600 mt-3 rounded-full"></div>
      {subtitle && <p className="mt-4 text-gray-600 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
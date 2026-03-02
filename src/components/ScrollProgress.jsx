import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollCompletion = () => {
    const currentProgress = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      setScrollProgress(
        Number((currentProgress / scrollHeight).toFixed(2)) * 100
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  // Growth logic: Scale from 1 to 1.5
  const iconScale = 1 + (scrollProgress / 200); 
  const iconColor = scrollProgress > 80 ? 'text-indigo-600' : 'text-blue-600';

  return (
    /* Higher Z-index (z-100) to ensure it's above the Navbar */
    <div className="fixed top-0 left-0 w-full h-1.5 z-100 pointer-events-none">
      
      {/* The Progress Bar Container */}
      <div 
        className="h-full bg-blue-600/30 w-full absolute top-0 left-0" 
      />

      {/* The Active Progress Line */}
      <div 
        className="h-full bg-black-600 transition-all duration-150 ease-out relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Airplane Icon - Absolute position relative to the blue line */}
        <div 
          className={`absolute right-0 top-1/2 transition-colors duration-500 ${iconColor}`}
          style={{ 
            transform: `translate(0%, -50%) scale(${iconScale})`,
            marginRight: scrollProgress < 2 ? '0px' : '-12px' // Prevents disappearing at 0%
          }}
        >
           <svg 
            className="w-7 h-7 rotate-90 drop-shadow-md" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
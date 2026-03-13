import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold">Kanish R</h2>
          <p className="text-gray-400 mt-2">AI & Data Science Engineer</p>
        </div>
        <div className="flex gap-6">
            <a href="https://github.com/KanishRajaraman" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.12 3.29 9.46 7.86 10.99.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12.02C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/just_kanish?igsh=eWU5YmNnZjZlODIy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm8 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/kanishrajaraman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7 0h4.8v1.93h.07c.67-1.27 2.3-2.61 4.73-2.61C22.2 7.32 24 9.65 24 13.62V22h-5v-7.03c0-1.68-.03-3.83-2.33-3.83-2.33 0-2.69 1.82-2.69 3.7V22H7V8z" />
              </svg>
            </a>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        KR
      </div>
    </footer>
  );
};

export default Footer;
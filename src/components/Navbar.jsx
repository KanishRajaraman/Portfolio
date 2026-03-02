import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Click logo to go back to top */}
        <a href="#home" className="text-2xl font-black tracking-tighter text-blue-600 cursor-pointer">
          KR<span className="text-gray-900">.</span>
        </a>

        <ul className="hidden md:flex space-x-10 text-sm font-bold uppercase tracking-widest text-gray-500">
          <li>
            <a href="#about" className="hover:text-blue-600 transition duration-300">About</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-600 transition duration-300">Experience</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 transition duration-300">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
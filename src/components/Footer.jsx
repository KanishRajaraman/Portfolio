import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold">Kanish R</h2>
          <p className="text-gray-400 mt-2">AI & Data Science Student | NCC Cadet</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition">Instagram</a>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        Built with ❤️ using React & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
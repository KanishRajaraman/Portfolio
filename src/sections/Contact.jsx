import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
        <p className="text-gray-600 text-lg mb-10">
          I'm always open to discussing AI projects, aeromodelling, or leadership opportunities.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href="mailto:kanishrajaraman@gmail.com?subject=Reaching%20out%20from%20Portfolio" 
            target="_blank"
            rel="noreferrer" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all"
          >
            Send an Email
          </a>
          <a 
            href="https://www.linkedin.com/in/kanishrajaraman/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Kanish . All rights reserved.</p>
          <p>Based in Coimbatore, TN</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

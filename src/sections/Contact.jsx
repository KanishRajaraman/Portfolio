import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "kanishrajaraman@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    // Reset the "Copied" message after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
        <p className="text-gray-600 text-lg mb-10">
          I'm always open to discussing AI projects, aeromodelling, or leadership opportunities.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Email Action Button */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <a 
              href={`mailto:${email}`} 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/20 active:scale-95 transition-all duration-200"
            >
              Send an Email
            </a>
            <button 
              onClick={copyToClipboard}
              className="text-xs text-gray-400 hover:text-blue-600 transition-colors font-medium"
            >
              {copied ? "✓ Copied to clipboard!" : "Or click to copy email address"}
            </button>
          </div>

          {/* LinkedIn Button */}
          <a 
<<<<<<< HEAD
=======
            href="mailto:kanishrajaraman@gmail.com?subject=Reaching%20out%20from%20Portfolio" 
            target="_blank"
            rel="noreferrer" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all"
          >
            Send an Email
          </a>
          <a 
>>>>>>> b0eb9655092e2ce41dd4c33389795b3404319dab
            href="https://www.linkedin.com/in/kanishrajaraman/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 active:scale-95 transition-all w-full md:w-auto"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Kanish. All rights reserved.</p>
          <p>Based in Coimbatore, TN</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

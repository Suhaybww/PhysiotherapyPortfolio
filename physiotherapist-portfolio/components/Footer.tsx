import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-4 bg-white text-black">
      <div className="flex flex-col items-center space-y-2">
        <p className="font-bold">
          Copyright © 2024 - All rights reserved
        </p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        {/* Footer Text */}
        <p className="font-semibold text-lg">© 2024 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
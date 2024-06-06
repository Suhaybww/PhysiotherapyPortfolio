import React from 'react';
import { NavBar } from './Navbar';
import { AnimatedTooltip } from './AnimatedTooltip';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-primary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold flex items-center space-x-4">
          <AnimatedTooltip />
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

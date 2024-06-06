import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold">Abdullahi</div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" passHref>
                <button className="btn btn-primary btn-sm">About</button>
              </Link>
            </li>
            <li>
              <Link href="#services" passHref>
                <button className="btn btn-primary btn-sm">Services</button>
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <button className="btn btn-primary btn-sm">Contact</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiHome, FiUser, FiBriefcase, FiMenu } from 'react-icons/fi';
import { cn } from '../utils/cn';

const navItems = [
  {
    name: 'Home',
    link: '/#hero', // Update the link to go directly to the hero section
    icon: <FiHome className="h-6 w-6" />,
  },
  {
    name: 'About',
    link: '#about',
    icon: <FiUser className="h-6 w-6" />,
  },
  {
    name: 'Services',
    link: '#services',
    icon: <FiBriefcase className="h-6 w-6" />,
  },
];

export const NavBar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("flex items-center justify-between p-4 bg-primary", className)}>
      <div className="hidden sm:flex items-center space-x-6">
        {navItems.map((navItem, idx) => (
          <Link key={`link=${idx}`} href={navItem.link} passHref>
            <button className="flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300 font-semibold">
              <span className="text-lg">{navItem.name}</span>
            </button>
          </Link>
        ))}
        <Link href="#contact" passHref>
          <button className="bg-accent text-white text-lg font-semibold relative px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md">
            <span>Contact</span>
          </button>
        </Link>
      </div>
      <div className="sm:hidden flex items-center">
        <button className="text-white" onClick={toggleMenu}>
          <FiMenu className="h-8 w-8" />
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden absolute top-20 right-0 bg-primary shadow-lg rounded-md p-4 space-y-2 z-10">
          {navItems.map((navItem, idx) => (
            <Link key={`link=${idx}`} href={navItem.link} passHref>
              <button className="flex items-center space-x-2 text-white w-full justify-start font-semibold py-2 hover:bg-accent rounded-md">
                {navItem.icon}
                <span className="ml-2">{navItem.name}</span>
              </button>
            </Link>
          ))}
          <Link href="#contact" passHref>
            <button className="w-full bg-accent text-white font-semibold py-2 rounded-md hover:bg-blue-600">
              Contact
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
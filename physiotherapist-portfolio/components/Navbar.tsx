'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Link from 'next/link';
import { FiHome, FiUser, FiBriefcase } from 'react-icons/fi';
import { cn } from '../utils/cn'; // Ensure you have a utility function for classnames

export const NavBar = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const previous = scrollYProgress.getPrevious();
      const currentScroll = scrollYProgress.get();

      if (previous !== undefined && currentScroll !== undefined) {
        let direction = currentScroll - previous;

        if (currentScroll < 0.05) {
          setVisible(false);
        } else {
          setVisible(direction < 0);
        }
      }
    }
  });

  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <FiHome className="h-4 w-4 text-neutral-500 dark:text-black" />,
    },
    {
      name: 'About',
      link: '#about',
      icon: <FiUser className="h-4 w-4 text-neutral-500 dark:text-black" />,
    },
    {
      name: 'Services',
      link: '#services',
      icon: <FiBriefcase className="h-4 w-4 text-neutral-500 dark:text-black" />,
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4',
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link key={`link=${idx}`} href={navItem.link} passHref>
            <div className="relative text-black items-center flex space-x-1 hover:text-black/[0.9]">
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </div>
          </Link>
        ))}
        <Link href="#contact" passHref>
          <div className="bg-accent text-white text-sm font-medium relative px-4 py-2 rounded-full">
            <span>Contact</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

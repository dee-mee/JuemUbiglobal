import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page, options?: { scrollToId?: string }) => void;
}

const SoundwaveIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10h3v4H2zM7 6h3v12H7zM12 2h3v20h-3zM17 6h3v12h-3zM22 10h-3v4h3z" />
    </svg>
);


const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const navLinks = Object.values(Page);

  return (
    <header className="bg-dark-bg/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentPage(Page.Home)}
          >
            <SoundwaveIcon />
            <h1 className="text-xl md:text-2xl font-bold font-heading text-white-text tracking-wider uppercase">
              Juem Uniglobal
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-sm font-medium uppercase tracking-widest transition duration-300 ease-in-out relative ${
                  currentPage === page ? 'text-primary' : 'text-light-text hover:text-white-text'
                }`}
              >
                {page}
                {currentPage === page && (
                  <span className="absolute left-0 -bottom-2 block h-0.5 w-full bg-primary"></span>
                )}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
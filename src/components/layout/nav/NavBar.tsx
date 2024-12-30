import { useState } from 'react';
import { cn } from '@components/lib/utils';
import { NavLinks } from '@components/layout/nav/NavLinks';
import { LangSelector } from './LangSelector';
import { ButtonCV } from '../ButtonCV';
import { Sidebar } from './Sidebar';
import { CloseButton } from './CloseButton';
import { NavLogo } from './NavLogo';
import { HamburguerButton } from './HamburguerButton';
import { Overlay } from './Overlay';
import { actualLanguage } from '@nanoStore/globalState';

const NavBar = ({ lang }: { lang: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  actualLanguage.set(lang);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        aria-label="Global"
        className="flex items-center justify-evenly lg:px-8 header-animate backdrop-blur-[10px] md:backdrop-blur-0 w-full mb-10 overflow-visible z-40 py-10"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <NavLogo />

          {/* Hamburger Button */}
          <HamburguerButton onClickHandler={toggleMenu} />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6">
            <NavLinks />
            <LangSelector />
          </nav>

          {/* Download CV button */}
          <div className="hidden lg:flex">
            <ButtonCV />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Overlay show={isOpen} onClickHandler={toggleMenu} />

      <div
        className={cn(
          'fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 py-16 px-6 transform transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-full' : '-translate-x-0'
        )}
      >
        {/* Close Button */}
        <CloseButton onClickHandler={toggleMenu} />

        {/* Sidebar Links */}
        <Sidebar />
      </div>
    </>
  );
};

export default NavBar;

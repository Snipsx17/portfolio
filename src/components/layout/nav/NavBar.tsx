import { useState } from 'react';
import { actualLanguage } from '@nanoStore/globalState';
import { NavLogo } from './NavLogo';
import { LangSelector } from './LangSelector';
import { ButtonCV } from '../ButtonCV';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export default function Navbar({ lang }: { lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  actualLanguage.set(lang);

  return (
    <div
      aria-label="Global"
      className="flex justify-center px-10 md:px-20 lg:px-28 header-animate backdrop-blur-[10px] md:backdrop-blur-0 w-full mb-10 overflow-visible z-40 py-10"
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <NavLogo />

        {/* Desktop Menu */}
        <DesktopMenu />

        {/* Lang selector and Download CV */}
        <div className="hidden lg:flex gap-4">
          <LangSelector />
          <ButtonCV />
        </div>

        {/* Mobile Hamburger Menu */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
}

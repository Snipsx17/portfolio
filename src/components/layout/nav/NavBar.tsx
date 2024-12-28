import { useState } from 'react';
import { cn } from '@components/lib/utils';
import { Button } from '@components/ui/button';
import Logo from '@images/logo.svg';
import { NavLinks } from '@components/layout/nav/NavLinks';
import { Download } from 'lucide-react';
import { getTranslation } from 'src/i18n';

const ButtonText = ({ lang }: { lang: string }) => (
  <a
    href="CV_Uberth_Hernandez.pdf"
    target="_blank"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-2xl font-p focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-blue text-p font-3xl text-white font-bold hover:bg-blue/80 h-16 rounded-xl px-8 hover:scale-105 transition-all duration-300"
  >
    <Download /> {getTranslation(lang, 'download CV')}
  </a>
);

const NavBar = ({ lang }: { lang: string }) => {
  const [isOpen, setIsOpen] = useState(true);

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
          <div>
            <a className="basis-2/3 md:basis-3/4" href="/">
              <img
                src={Logo.src}
                alt="Logo"
                sizes={`(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${Logo.width}px`}
              />
            </a>
          </div>

          {/* Hamburger Button */}
          <Button
            variant="ghost"
            className="lg:hidden [&_svg]:size-16"
            onClick={toggleMenu}
            aria-label="Open Menu"
            size={'lg'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6">
            <NavLinks lang={lang} />
          </nav>

          {/* Download CV button */}
          <div className="hidden lg:flex">
            <Button variant={'downloadCv'} asChild>
              <ButtonText lang={lang} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          'inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-0 hidden' : 'opacity-100 pointer-events-none fixed'
        )}
        onClick={toggleMenu}
      />

      <div
        className={cn(
          'fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 py-16 px-6 transform transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-full' : '-translate-x-0'
        )}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          aria-label="Close Menu"
          className="absolute top-4 right-4 text-gray-800 [&_svg]:size-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Sidebar Links */}
        <nav className="mt-8 space-y-4">
          <NavLinks lang={lang} />
          <Button variant={'downloadCv'} asChild>
            <ButtonText lang={lang} />
          </Button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

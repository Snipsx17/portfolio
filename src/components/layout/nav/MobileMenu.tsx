import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/ui';
import { useStore } from '@nanostores/react';
import {
  ChevronDown,
  CircleUserRound,
  CloudCog,
  FolderGit,
  GraduationCap,
  Menu,
  NotebookPen,
  User,
} from 'lucide-react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { actualLanguage } from '@nanoStore/globalState';
import { getTranslation } from '@utils/i18n';
import { LangSelector } from './LangSelector';
import { ButtonCV } from '../ButtonCV';

export const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const lang = useStore(actualLanguage);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size={'lg'}
          className="md:hidden [&_svg]:size-12"
        >
          <Menu size={100} />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent className="w-[50%] bg-white">
        <SheetHeader>
          <SheetTitle className="text-2xl">Menu</SheetTitle>
        </SheetHeader>
        <ul className="mt-6 flex flex-col gap-4">
          {/* About Dropdown */}
          <li>
            <Button
              variant="ghost"
              className="hover:bg-transparent p-0 flex text-2xl w-full justify-start"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              <span className="flex gap-2 h-full capitalize">
                <User size={20} />
                {getTranslation(lang, 'navlinks.about')}
              </span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  aboutOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </Button>

            {/* Dropdown content */}
            {aboutOpen && (
              <ul className="mt-2 pl-4 flex flex-col gap-2 transition-all duration-300">
                <li>
                  <a
                    href="https://uhernandez.com/#projects"
                    className="flex gap-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 capitalize"
                  >
                    <FolderGit size={20} />{' '}
                    {getTranslation(lang, 'navlinks.projects')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://uhernandez.com/#experiences"
                    className="flex gap-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 capitalize"
                  >
                    <CloudCog size={20} />{' '}
                    {getTranslation(lang, 'navlinks.experiences')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://uhernandez.com/#education"
                    className="flex gap-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 capitalize"
                  >
                    <GraduationCap size={20} />
                    {getTranslation(lang, 'navlinks.education')}
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Blog */}
          <li>
            <a
              href="https://uhernandez.com/blog"
              className="flex gap-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300"
            >
              <NotebookPen size={20} /> Blog
            </a>
          </li>

          {/* Contact */}
          <li>
            <a
              href="https://uhernandez.com/#contact"
              className="flex gap-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 capitalize"
            >
              <CircleUserRound size={20} />{' '}
              {getTranslation(lang, 'navlinks.contact')}
            </a>
          </li>
          <li>
            <LangSelector />
          </li>
          {/* Lang selector and Download CV */}
          <li className="mt-10">
            <ButtonCV />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

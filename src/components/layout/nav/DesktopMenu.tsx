import { actualLanguage } from '@nanoStore/globalState';
import { useStore } from '@nanostores/react';
import { getTranslation } from '@utils/i18n';
import {
  ChevronDown,
  CircleUserRound,
  CloudCog,
  FolderGit,
  GraduationCap,
  NotebookPen,
} from 'lucide-react';

export const DesktopMenu = () => {
  const lang = useStore(actualLanguage);

  return (
    <ul className="hidden lg:flex lg:flex-row gap-6 items-center capitalize font-normal">
      {/* About Dropdown */}
      <li className="relative group">
        <a className="flex gap-3 p-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 cursor-pointer capitalize">
          <ChevronDown /> {getTranslation(lang, 'navlinks.about')}
        </a>

        {/* Dropdown Content */}
        <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md border rounded-md p-4">
          <li>
            <a
              href="https://uhernandez.com/#projects"
              className="flex gap-3 p-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 capitalize"
            >
              <FolderGit size={20} />
              {getTranslation(lang, 'navlinks.projects')}
            </a>
          </li>
          <li>
            <a
              href="https://uhernandez.com/#experiences"
              className="flex gap-3 p-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 capitalize"
            >
              <CloudCog size={20} />{' '}
              {getTranslation(lang, 'navlinks.experiences')}
            </a>
          </li>
          <li>
            <a
              href="https://uhernandez.com/#education"
              className="flex gap-3 p-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 capitalize"
            >
              <GraduationCap size={20} />{' '}
              {getTranslation(lang, 'navlinks.education')}
            </a>
          </li>
        </ul>
      </li>

      {/* Blog */}
      <li>
        <a
          href="https://uhernandez.com/blog"
          className="flex gap-3 p-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300 capitalize"
        >
          <NotebookPen size={20} /> Blog
        </a>
      </li>

      {/* Contact */}
      <li>
        <a
          href="https://uhernandez.com/#contact"
          className="flex gap-3 p-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300"
        >
          <CircleUserRound size={20} />
          {getTranslation(lang, 'navlinks.contact')}
        </a>
      </li>
    </ul>
  );
};

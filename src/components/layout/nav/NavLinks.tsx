import {
  UserRound,
  FolderGit,
  CloudCog,
  GraduationCap,
  CircleUserRound,
} from 'lucide-react';
import { getTranslation } from '@utils/i18n';
import { useStore } from '@nanostores/react';
import { actualLanguage } from '@nanoStore/globalState';

const links = [
  { name: 'navlinks.about', href: '#about', icon: <UserRound size={20} /> },
  {
    name: 'navlinks.projects',
    href: '#projects',
    icon: <FolderGit size={20} />,
  },
  {
    name: 'navlinks.experiences',
    href: '#experiences',
    icon: <CloudCog size={20} />,
  },
  {
    name: 'navlinks.education',
    href: '#education',
    icon: <GraduationCap size={20} />,
  },
  {
    name: 'navlinks.contact',
    href: '#contact',
    icon: <CircleUserRound size={20} />,
  },
];

export const NavLinks = ({
  onClickHandler,
}: {
  onClickHandler: () => void;
}) => {
  const lang = useStore(actualLanguage);

  return (
    <ul className="flex-col lg:flex lg:flex-row gap-6 items-center capitalize font-normal">
      {links.map((link, index) => (
        <a
          key={index}
          onClick={onClickHandler}
          className="flex gap-3 p-3 border-box border-2 border-transparent rounded-lg hover:scale-105 hover:border-blue/20 hover:bg-lightBlue/20  transition-all duration-300"
          href={link.href}
        >
          {link.icon} {getTranslation(lang, link.name)}
        </a>
      ))}
    </ul>
  );
};

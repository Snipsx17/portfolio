import { LangSelector } from './LangSelector';
import { NavLinks } from './NavLinks';
import { ButtonCV } from '@components/layout/ButtonCV';

export const Sidebar = () => {
  return (
    <nav className="mt-8 space-y-4 flex flex-col gap-4">
      <NavLinks />
      <LangSelector />
      <ButtonCV />
    </nav>
  );
};

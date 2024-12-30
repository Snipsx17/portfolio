import type { ReactNode } from 'react';

export const Sidebar = ({ children }: { children: ReactNode }) => {
  return <nav className="mt-8 space-y-4 flex flex-col gap-4">{children}</nav>;
};

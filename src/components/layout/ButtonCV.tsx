import { Download } from 'lucide-react';
import { getTranslation } from '@utils/i18n';
import { Button } from '@components/ui/button';

export const ButtonCV = ({ lang }: { lang: string }) => {
  return (
    <Button variant={'downloadCv'} size={'lg'} asChild>
      <a
        href="/CV_Uberth_Hernandez.pdf"
        target="_blank"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-2xl font-p focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-blue text-p font-3xl text-white font-bold hover:bg-blue/80 h-16 rounded-xl px-8 capitalize hover:scale-105 transition-transform"
      >
        <Download />
        {getTranslation(lang, 'download CV')}
      </a>
    </Button>
  );
};

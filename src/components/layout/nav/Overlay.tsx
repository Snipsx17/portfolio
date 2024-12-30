import { cn } from '@components/lib/utils';
import { useStore } from '@nanostores/react';

export const Overlay = ({
  show,
  onClickHandler,
}: {
  show: boolean;
  onClickHandler: () => void;
}) => {
  return (
    <div
      id="overlay"
      className={cn(
        'inset-0 bg-black/50 transition-opacity duration-300 lg:hidden',
        show ? 'opacity-0 hidden' : 'opacity-100 fixed z-40'
      )}
      onClick={onClickHandler}
    ></div>
  );
};

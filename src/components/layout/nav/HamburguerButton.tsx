import { Button } from '@components/ui/button';

export const HamburguerButton = ({
  onClickHandler,
}: {
  onClickHandler: () => void;
}) => {
  return (
    <Button
      variant="ghost"
      className="lg:hidden [&_svg]:size-16"
      onClick={onClickHandler}
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
  );
};

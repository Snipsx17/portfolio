export const CloseButton = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
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
  );
};

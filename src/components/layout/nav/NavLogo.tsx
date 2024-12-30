import Logo from '@images/logo.svg';

export const NavLogo = () => {
  return (
    <div>
      <a className="basis-2/3 md:basis-3/4" href="/">
        <img
          src={Logo.src}
          alt="Logo"
          sizes={`(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${Logo.width}px`}
        />
      </a>
    </div>
  );
};

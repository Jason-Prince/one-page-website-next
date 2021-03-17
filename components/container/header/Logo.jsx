import { LogoG } from "../../LogoG";

export const Logo = () => {
  return (
    <div className="fixed left-2 top-2 grid auto-cols-max">
      <a href="#hero">
        <div className="bg-primary-light rounded-full p-2 shadow-lg">
          <LogoG />
        </div>
      </a>
    </div>
  );
};

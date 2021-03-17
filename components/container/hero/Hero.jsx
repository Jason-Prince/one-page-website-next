import { LogoFull } from "../../LogoFull";

export const Hero = () => {
  return (
    <div className="invisible md:visible h-screen grid grid-flow-row place-items-center place-content-center gap-8">
      <div className="font-carme text-3xl">
        Saving the world one building at a time!
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-10 ">
        <a href="#contact-me">
          <div className="col-start-1 row-start-1 font-carme text-xl text-primary-light bg-secondary border-2 border-primary-light rounded px-2 py-1 shadow-lg">
            Get Started
          </div>
        </a>
        <a href="#learn-more">
          <div className="col-start-2 row-start-1 font-carme text-xl text-secondary bg-primary-light border-2 border-current rounded px-2 py-1 shadow-lg">
            Learn More
          </div>
        </a>
      </div>
    </div>
  );
};

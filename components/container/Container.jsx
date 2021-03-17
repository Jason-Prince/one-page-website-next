import { HeaderMobile } from "./headerMobile/HeaderMobile";
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";
import { AboutMe } from "./aboutMe/AboutMe";

export const Container = () => {
  return (
    <div className="static min-h-screen overflow-auto bg-primary-light grid grid-flow-row auto-cols-fr auto-rows-max">
      <HeaderMobile />
      <Header />
      <Hero />
      <AboutMe />
    </div>
  );
};

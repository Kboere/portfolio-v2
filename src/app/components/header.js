import Navigation from "./navigation";
import TransitionLink from "./transitionLink";
import Location from "./organisms/location";
import DarkmodeToggle from "./organisms/darkmode";
import Logo from "./atoms/logo";

const Header = () => (
  <div id="header" className="relative flex flex-row justify-between items-center">
    <header className="fixed top-0 lg:top-1/2 lg:-translate-y-1/2 p-4 flex flex-row lg:flex-col flex-nowrap w-mobile-nav lg:w-fit lg:h-[100vh] z-20">
      <div className="lg:w-fit order-2 lg:order-1 absolute left-1/2 -translate-x-1/2 lg:relative">
        <TransitionLink href="/" label="Home">
          <Logo />
        </TransitionLink>
      </div>

      <Navigation />
    </header>
    <section className="w-fit fixed lg:absolute top-0 right-0 p-4 flex flex-row gap-4">
      <Location />
      <DarkmodeToggle />
    </section>
  </div>
);

export default Header;

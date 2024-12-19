import Navigation from "./navigation";
import TransitionLink from "./transitionLink";
import Location from "./organisms/location";
import DarkmodeToggle from "./organisms/darkmode";
import Logo from "./atoms/logo";

const Header = () => (
    <><header className="fixed p-4 flex flex-col flex-nowrap h-[100vh] z-10">
    <div className="w-fit">
      <TransitionLink href="/" label="Home">
        <Logo />
      </TransitionLink>
    </div>

    <Navigation />

  </header><section className=" absolute right-0 p-4 flex flex-row gap-4">
      <Location />
      <DarkmodeToggle />
    </section></>
);

export default Header;
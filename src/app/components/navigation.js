import TransitionLink from "./transitionLink";

const Navigation = () => (
  <nav className="w-fit mt-4 flex justify-between flex-col h-full">
    <ul className="relative mt-16 flex content-start flex-wrap flex-col gap-12">
      <li className="text-lg writing-mode-sideways-lr text-orientation-sideways">
        <TransitionLink href="/portfolio" label="Projects" />
      </li>
      <li className="text-lg writing-mode-sideways-lr text-orientation-sideways">
        <TransitionLink href="/#contact" label="Contact" />
      </li>
    </ul>

    <ul>
        <li className="text-lg writing-mode-sideways-lr text-orientation-sideways 
[>a]:mix-blend-darken">
            <TransitionLink href="/about-me" label="About me">
             <img className='w-fit' src='/images/dots.svg' alt='Logo' />
            </TransitionLink>
        </li>
    </ul>
  </nav>
);

export default Navigation;

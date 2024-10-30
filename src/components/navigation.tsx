import { useState } from "react";
import { MenuIcon, UserIcon } from "../assets/icons";
// import LightButton from "./LightButton";
import Logo from "./logo";
import PrimaryButton from "./PrimaryButton";

interface INavigation {
  activeNav: "home" | "about" | "pricing" | "contact";
  isAuthenticated: boolean;
  user?: {
    name: string;
  };
}

const Navigation = ({ activeNav, isAuthenticated, user }: INavigation) => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="bg-black max-h-[120px] py-8 place-items-center sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Logo />

        <button
          onClick={() => setMenuState(!menuState)}
          className="block lg:hidden"
          aria-expanded={menuState}
          aria-controls="mobile-navigation"
        >
          <MenuIcon />
        </button>

        <nav className="hidden lg:block">
          <ul className="text-white flex gap-12">
            <li
              className={`${
                activeNav === "home" ? "text-[var(--primary-color)]" : ""
              } hover:text-[var(--primary-color)]`}
            >
              <a href="#home">HOME</a>
            </li>
            <li
              className={`${
                activeNav === "about" ? "text-[var(--primary-color)]" : ""
              } hover:text-[var(--primary-color)]`}
            >
              <a href="#about">ABOUT US</a>
            </li>
            <li
              className={`${
                activeNav === "pricing" ? "text-[var(--primary-color)]" : ""
              } hover:text-[var(--primary-color)]`}
            >
              <a href="#pricing">PRICING</a>
            </li>
            <li
              className={`${
                activeNav === "contact" ? "text-[var(--primary-color)]" : ""
              } hover:text-[var(--primary-color)]`}
            >
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex flex-row gap-3  mr-16">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <UserIcon />
              <span>{user?.name}</span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-8">
                <a href="/signin">
                  {/* <LightButton
                  title={"Sign in"}
                  containerStyles="border !border-[var(--white-100)] rounded-xl min-w-[150px] !text-white hover:bg-[var(--text-color-30)] !hover:text-[var(--text-color-100)] "
                /> */}
                  <h3 className="text-white hover:text-[var(--primary-color)] ">Sign in</h3>
                </a>
                <a href="/signup">
                  <PrimaryButton
                    title={"Sign up"}
                    containerStyles="!bg-[var(--white-100)] rounded-xl min-w-[130px] h-14"
                  />
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuState && (
        <nav
          id="mobile-navigation"
          className="text-white flex flex-col items-center gap-4 lg:hidden"
        >
          <ul>
            <li
              className={`${
                activeNav === "home"
                  ? "text-[var(--primary-color)]"
                  : "hover:text-[var(--primary-color)]"
              }`}
            >
              <a href="#home">HOME</a>
            </li>
            <li
              className={`${
                activeNav === "about"
                  ? "text-[var(--primary-color)]"
                  : "hover:text-[var(--primary-color)]"
              }`}
            >
              <a href="#about">ABOUT US</a>
            </li>
            <li
              className={`${
                activeNav === "pricing"
                  ? "text-[var(--primary-color)]"
                  : "hover:text-[var(--primary-color)]"
              }`}
            >
              <a href="#pricing">PRICING</a>
            </li>
            <li
              className={`${
                activeNav === "contact"
                  ? "text-[var(--primary-color)]"
                  : "hover:text-[var(--primary-color)]"
              }`}
            >
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navigation;

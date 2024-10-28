import { useState } from "react";
import { MenuIcon, UserIcon } from "../assets/icons";
import LightButton from "./LightButton";
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
  const [menuState, setMenuState ] = useState(false)
  return (
    <div className=" bg-black max-h-[120px] py-8 place-items-center sticky top-0 z-50">
      <div className="flex justify-between items-center">
      <Logo />

      <div onClick={()=>setMenuState(!menuState)} className="block lg:hidden" >
        <MenuIcon  />
      </div>

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

      <div className="flex flx-row gap-3">
        {isAuthenticated ? (
          <div className="flex items-center space-x-3">
            <UserIcon />
            <span>{user?.name}</span>
          </div>
        ) : (
          <>
            <a href="/signin">
              <LightButton
                title={"Sign in"}
                containerStyles="border !border-[var(--white-100)] rounded-xl min-w-[150px] !text-white hover:bg-[var(--text-color-30)] !hover:text-[var(--text-color-100)] "
              />
            </a>
            <a href="/signup">
              <PrimaryButton
                title={"Sign up"}
                containerStyles="!bg-[var(--white-100)] rounded-xl min-w-[180px] h-14"
              />
            </a>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navigation;

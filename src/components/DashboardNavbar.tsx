import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Logo from "../assets/images/Frame 20459.png"
import { HelpIcon } from "../assets/icons/svg";

interface INavbar {
  activeNav?: "Why us" | "Get Cover" | "Submit Claim";
}

const DashboardNavbar = ({ activeNav }: INavbar) => {
  const [, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const NavOptions = [
    { text: "Home", link: "/home" },
    { text: "Who we are ", link: "/who_we_are" },
    { text: "Contact us", link: "/contact_us" },
  ];

  return (
    <header className="w-full sticky h-24  top-0 z-50 bg-black">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-full px-4 lg:px-12 xl:px-24">
        {/* Logo and Menu Button */}
      

        <div className="flex flex-row items-center">
          <button
            className="lg:hidden"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          ></button>
          <div>
            <a href="/" className="cursor-pointer">
            <img src={Logo} alt="praestans consult logo" />
            </a>
          </div>
        </div>
        {/* Menu Items */}
        <nav className="hidden lg:block">
          <ul className="flex font-semibold gap-10">
            {NavOptions.map((nav) => (
              <li
                key={nav.text}
                className={`relative flex flex-col-reverse ${
                  activeNav === nav.text ? "text-[var(--primary-color)]" : "text-white"
                } hover:text-[var(--primary-color)] group `}
              >
                <a href={nav.link}> {nav.text}</a>
                <span className="absolute w-0 bottom-0 top-14 h-[4px] bg-[var(--primary-color)] transition-all duration-300 ease-out group-hover:w-full"></span> 
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a href="">
            <PrimaryButton
              title={"Talk to us"}
              containerStyles="btn_outline lg:min-w-[120px] h-12 rounded-lg text-[16px]   max-w-[250px] px-10  "
              icon={<HelpIcon color="black"/>}
              textColor="text-black" bgColor="var(--primary-btn)"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;

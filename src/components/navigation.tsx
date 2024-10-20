import LightButton from "./LightButton";
import PrimaryButton from "./PrimaryButton";

interface INavigation {
  activeNav: "home" | "about" | "pricing" | "contact";
}

const Navigation = ({ activeNav }: INavigation) => {
  return (
    <div className="grid grid-cols-3 justify-between bg-black max-h-[120px] py-12 place-items-center sticky top-0 z-50">
      <h3 className="text-white text-[32px] font-extrabold mt-auto items-center flex">
        Swift
        <span className="!font-semibold text-[var(--primary-color)]">POs</span>
      </h3>

      <nav>
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
        <LightButton
          title={"Sign in"}
          containerStyles="border !border-[var(--white-100)] rounded-xl min-w-[200px] !text-white"
        />
        <PrimaryButton
          title={"Try for Free"}
          containerStyles="!bg-[var(--white-100)] rounded-xl min-w-[200px] h-14"
        />
      </div>
    </div>
  );
};

export default Navigation;

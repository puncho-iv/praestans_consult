import LightButton from "./LightButton";
import PrimaryButton from "./PrimaryButton";

const navigation = () => {
  return (
    <div className="grid grid-cols-3 justify-between bg-black px-32 max-h-[120px] py-12 place-items-center">
      <h3 className="text-white text-[32px] font-extrabold mt-auto items-center flex">
        Swift
        <span className="!font-semibold text-[var(--primary-color)]">POs</span>
      </h3>

      <div className="">
        <ul className="text-white flex gap-12">
          <li className="hover:text-[var(--primary-color)]"><a href="#home">HOME</a></li>
          <li className="hover:text-[var(--primary-color)]"><a href="#about">ABOUT US</a></li>
          <li className="hover:text-[var(--primary-color)]"><a href="#pricing">PRICING</a></li>
          <li className="hover:text-[var(--primary-color)]"><a href="#contact">CONTACT US</a></li>
        </ul>
      </div>

      <div className="flex flx-row gap-3">
        <LightButton
          title={"Sign in"}
          containerStyles="border !border-[var(--white-100)] rounded-xl min-w-[150px] !text-white"
        />
        <PrimaryButton
          title={"Try for Free"}
          containerStyles="!bg-[var(--white-100)] rounded-xl !max-w-[300px] h-14"
        />
      </div>
    </div>
  );
};

export default navigation;

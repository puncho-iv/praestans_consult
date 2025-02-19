import HeaderImg from "../assets/images/Group.png";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  return (
    <header className="relative w-full h-screen bg-black">
      {/* <div className="h-full lg:w-full lg:min-h-[600px] bg-gradient-to-r from-[#000000] via-[#571C1C] to-[#9D4444]"> */}
      <div className="absolute inset-0">
        <img src={HeaderImg} alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-24 h-full">
        <h3 className="header text-[30px] md:text-[40px] lg:text-[60px] font-bold text-white leading-[2.5rem] md:leading-[3rem] lg:leading-[4.5rem] max-w-6xl">
          UNLOCK THE POWER OF REVOLUTIONIZED{" "}
          <span className="text-[var(--primary-btn)] ">DATA-DRIVEN</span>{" "}
          DECISION MAKING
        </h3>

        {/* Center Content */}

        <div className="flex flex-row  gap-3 items-center p-12">
          <PrimaryButton
            title={"Get Quote Now "}
            textColor="text-black"
            bgColor="var(--primary-btn)"
            containerStyles="px-8 h-14 rounded-lg font-semibold"
          />
          <PrimaryButton
            title={"Learn More "}
            textColor="white"
            stroke="white"
            containerStyles="px-8 h-14 rounded-lg font-semibold"
          />
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;

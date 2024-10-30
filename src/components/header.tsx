// import LightButton from "./LightButton";
import PrimaryButton from "./PrimaryButton";
import Hero from "../assets/headerImage.png";

const header = () => {
  return (
    <div className="flex flex-col justify-center lg:min-h-screen bg-black lg:max-h-[300px] max-h-[500px] pt-6  lg:pt-24 px-20">
      <div className="flex flex-col items-center mt-6 lg:mt-64 ">
        <span className="text-white text-[22px] text-center mb-4">
          PROBLEM SOLVING
        </span>
        <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-2">
          Comprehensive
        </h1>
        <span className="text-3xl md:text-4xl lg:text-5xl font-medium  text-white  text-center mt-0">
          business solutions for all.
        </span>
      </div>

      <div className="justify-center flex flex-row px-12 lg:px-0 mt-20 gap-5 pb-12 lg:pb-0 ">
        {/* <PrimaryButton
          title={"Buy Premium Access"}
          containerStyles=" h-14 rounded-xl max-w-[250px] min-w-[230px]  text-[var(--white-100)] "
        /> */}
        <a href="https://pos-mjsq.onrender.com/">
          {" "}
          {/* <LightButton
            title={"Start-Free Trial"}
            containerStyles=" hidden lg:flex h-14 rounded-xl min-w-[150px] max-w-[180px] text-[var(--primary-color20)] font-semibold "
          /> */}
          <PrimaryButton
            title={" Get Started "}
            containerStyles=" h-14 rounded-xl max-w-[200px] min-w-[180px]  text-[var(--white-100)] "
          />
        </a>
      </div>

      <div className="hidden lg:flex  justify-center lg:mt-auto mt-42 px-32  ">
        <img src={Hero} alt="Hero" className="rounded-t-2xl mt-24" />
      </div>
    </div>
  );
};

export default header;

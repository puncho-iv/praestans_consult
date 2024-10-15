import LightButton from "./LightButton";
import PrimaryButton from "./PrimaryButton";
import Hero from "../assets/headerImage.png"

const header = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-black max-h-[300px]   pt-24 px-20" id="#home">
      <div className="flex flex-col items-center mt-64 ">
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

      <div className="justify-center flex mt-20 gap-5 ">
        <PrimaryButton title={'Buy Premium Access'} containerStyles= " h-14 rounded-xl max-w-[250px] text-[var(--white-100)] " />
        <LightButton title={'Start-Free Trial'} containerStyles=" h-14 rounded-xl max-w-[200px] text-[var(--primary-color20)] font-semibold " />
      </div>

      <div className="flex  justify-center lg:mt-auto mt-42 px-32 shadow-md ">
        <img
          src={Hero }
          alt="Hero"
          className="rounded-t-2xl mt-24"
        />
      </div>
    </div>
  );
};

export default header;

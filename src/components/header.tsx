import { Menu } from "../components/pageComponents/menu";
import { Button } from "../components/ui/button";

const Header = () => {
  return (
    <header>
      <div className="h-full lg:w-full lg:min-h-[600px] bg-gradient-to-r from-[#000000] via-[#571C1C] to-[#9D4444]">
        <div className="flex flex-col justify-center  max-w-[1440px] mx-auto mt-auto ">
          {/* Top Navigation */}
          <div className="flex justify-between p-6 ">
            {/* <Button className="rounded-full bg-[var(--primary-color)] p-5 hover:bg-[var(--primary-color)]">
              Talk to an expert
            </Button> */}
            <Menu />
            <div className="flex justify-end items-center">
              <Button className="rounded-full bg-[var(--primary-color)] p-5 hover:bg-[var(--primary-color)] text-md h-12 px-8">
                Talk to an expert
              </Button>
            </div>
          </div>

          {/* Center Content */}

          <div className="flex flex-col items-center p-12">
            <h3 className="header leading-[2.5rem] md:leading-[3rem] lg:leading-[4.5rem]  text-center xl:max-w-6xl lg:py-12 lg:mt-10 text-white text-3xl font-semibold">
              <span className="text-[var(--primary-color)]">Unlocking</span> the power of revolutionized data-driven decision making
            </h3>
            <Button className="mt- rounded-full bg-[var(--primary-color)] p-5 hover:bg-[var(--primary-color)] px-8 text-md h-12">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

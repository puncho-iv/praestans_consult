import PrimaryButton from "./PrimaryButton";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 py-6">
        <h3 className="header_text text-[45px] !font-medium !text-5xl px-32 py-7">
          Simple Tools to manage all in one place{" "}
        </h3>
        <div className="p-12 flex flex-end justify-end">
          <a href="https://pos-mjsq.onrender.com/">
            <PrimaryButton
              title={"Get Started"}
              containerStyles="rounded-full !text-white min-w-[150px] min-w-[150px]"
            />
          </a>
        </div>
      </div>
      <footer className="bg-black">
        {/* Branding Section */}
        <div className="px-32 py-12">
          <h3 className="text-white text-[32px] font-extrabold mt-auto items-center flex">
            Swift
            <span className="!font-semibold text-[var(--primary-color)]">
              POs
            </span>
          </h3>
        </div>

        {/* Copyright Section */}
        <div className="flex px-32 py-6 border-t border-gray-600 items-center justify-between ">
          <h3 className="text-sm hidden lg:flex text-white">
            © 2024 Unicus Designs and Logistics.
            <span className="font-bold ml-1">All Rights Reserved.</span>
          </h3>

          <div className="flex gap-3 items-center">
            <h3 className="text-white text-sm hidden lg:flex">Terms of use</h3>
            <span className="text-white">|</span>
            <h3 className="text-white text-sm hidden lg:flex">
              Privacy policy
            </h3>
            <span className="text-white">|</span>
            <h3 className="text-white text-sm hidden lg:flex">
              Service agreement
            </h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

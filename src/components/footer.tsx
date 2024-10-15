const Footer = () => {
    return (
      <footer className="bg-black">
        {/* Branding Section */}
        <div className="px-32 py-12">
          <h3 className="text-white text-[32px] font-extrabold mt-auto items-center flex">
            Swift
            <span className="!font-semibold text-[var(--primary-color)]">POs</span>
          </h3>
        </div>
  
        {/* Copyright Section */}
        <div className="flex justify-center py-6 border-t border-gray-600">
          <h3 className="text-sm hidden lg:flex text-white">
            © 2024 Unicus Designs and Logistics.
            <span className="font-bold ml-1">All Rights Reserved.</span>
          </h3>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
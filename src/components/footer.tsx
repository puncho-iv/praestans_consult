const footer = () => {
  const footerItems = [
    {
      text: "HOME",
      link: "/Home",
    },
    { text: "CASE STUDIES", link: "/case" },
    { text: "WHO WE ARE", link: "/who" },
    { text: "CONTACT US", link: "/contact" },
  ];


  return (
    <div className="bg-gradient-to-r from-[#000000] via-[#571C1C] to-[#9D4444] ">
      <div className="bg-gradient-to-r from-[#000000] via-[#571C1C] to-[#9D4444] flex flex-col justify-between p-20 items-center ">
        <div className="flex flex-col gap-3 ">
          {footerItems.map((footer, index) => (
            <a key={index} href={footer.link} className="gap-5  text-white">
              {footer.text}
            </a>
          ))}
        </div>
      </div>
      <div className="flex lg:justify-center p-5 lg:p-10 border-t ">
        <h3 className="text-sm   text-white lg:text-center  ">
          © 2025 Praestans Consulting.
          <span className=" ml-1">All Rights Reserved.</span>
        </h3>
      </div>
    </div>
  );
};

export default footer;

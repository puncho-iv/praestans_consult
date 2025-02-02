const footer = () => {
  const footerItems = [
    {
      text: "Terms of Service",
      link: "/terms",
    },
    { text: "Privacy Policy", link: "/privacy" },
    { text: "Cookies", link: "/cookies" },
  ];
  return (
    <div className="bg-gradient-to-r from-[#000000] via-[#571C1C] to-[#9D4444] flex justify-between p-20 items-center ">
      <div className="flex lg:justify-center p-5 lg:p-10 ">
        <h3 className="text-sm   text-white lg:text-center  ">
          © 2025 Praestans Consulting.
          <span className=" ml-1">All Rights Reserved.</span>
        </h3>
      </div>
      <div className="flex gap-5 ">
        {footerItems.map((footer, index) => (
          <a key={index} href={footer.link} className="gap-5 flex flex-row text-white">
            {index !== 0 &&  <span>|</span>}
            {footer.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default footer;

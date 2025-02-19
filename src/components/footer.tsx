import { Location, SMS } from "../assets/icons/svg";
import Logo from "../assets/images/Frame 20459.png";

interface IFooter {
  headerText: string;
  footerContact: {
    text: string;
    desc: string;
    icon: JSX.Element;
  }[];
}

const Footer = () => {
  const footerItems = [
    { text: "HOME", link: "/Home" },
    { text: "CASE STUDIES", link: "/case" },
    { text: "WHO WE ARE", link: "/who" },
    { text: "CONTACT US", link: "/contact" },
  ];

  const contactItems: IFooter[] = [
    {
      headerText: "Contact Us",
      footerContact: [
        { text: "Location", desc: "Accra, Ghana", icon: <Location size={20} /> },
        { text: "Email", desc: "support@praestansconsult.com", icon: <SMS size={20} /> },
      ],
    },
  ];

  return (
    <footer className="max-w-[1440px] xl:py-12 xl:px-24 md:px-20 mx-auto lg:px-12">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="Praestans Consulting Logo" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3">
            {footerItems.map(({ text, link }) => (
              <a key={link} href={link} className="gap-5 text-white">
                {text}
              </a>
            ))}
          </nav>

          {/* Contact Section */}
          {contactItems.map(({ headerText, footerContact }) => (
            <div key={headerText}>
              <h3 className="font-semibold">{headerText}</h3>
              <div className="flex flex-col space-y-3">
                {footerContact.map(({ text, desc, icon }) => (
                  <div key={text} className="flex gap-3">
                    <div className="bg-white backdrop-blur-md bg-opacity-10 p-3 flex items-center justify-center rounded-xl">
                      {icon}
                    </div>
                    <div className="text-white">
                      <p className="font-medium text-white">{text}</p>
                      <span className="text-white">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="flex lg:justify-center p-5 lg:px-10 xl:mt-24">
          <h3 className="text-sm text-white lg:text-center">
            © 2025 Praestans Consulting. <span className="ml-1">All Rights Reserved.</span>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

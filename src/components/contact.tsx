import { EmailIcon, PhoneIcon } from "../assets/icons";
import PrimaryButton from "./PrimaryButton";

const contact = () => {
  const handleSendEmail = () => {
    const nameElement = document.getElementById(
      "name"
    ) as HTMLInputElement | null;
    const emailElement = document.getElementById(
      "email"
    ) as HTMLInputElement | null;
    const messageElement = document.getElementById(
      "message"
    ) as HTMLTextAreaElement | null;

    // Check if any of the elements are null before accessing their value
    if (nameElement && emailElement && messageElement) {
      const name = nameElement.value;
      const email = emailElement.value;
      const message = messageElement.value;

      // Constructing the mailto link
      const mailtoLink = `mailto:unicusdnl@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${encodeURIComponent(
        message
      )}`;

      window.location.href = mailtoLink; // Redirect to mailto link
    } else {
      console.error("One or more input fields are null");
    }
  };

  return (
    <div className="px-64 py-32 grid grid-cols-2 gap-12" id="contact">
      {/* Contact Information Section */}
      <div>
        <h3 className="text-5xl">Get in touch with us</h3>

        {/* Phone Number Section */}
        <div className="mt-24 flex items-center gap-5">
          <div className="bg-[var(--primary-color)] py-5 h-[42px] w-[42px] flex justify-center items-center rounded-full">
            <PhoneIcon />
          </div>
          <div className="flex flex-col">
            <a
              href="https://api.whatsapp.com/send?phone=233246414019"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-semibold">Phone Number</h2>
              <h3 className="text-2xl font-medium text-[var(--text-color-80)]">
                0246414019
              </h3>
            </a>
          </div>
        </div>

        {/* Email Section */}
        <div className="py-12 flex items-center gap-5">
          <div className="bg-[var(--primary-color)] py-4 h-[42px] w-[42px] flex justify-center items-center rounded-full">
            <EmailIcon />
          </div>
          <div className="flex flex-col">
            <a
              href="mailto:unicusdnl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-semibold">Email</h2>
              <h3 className="text-2xl font-medium text-[var(--text-color-80)]">
                unicusdnl@gmail.com
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-20">
        {/* Name Input */}
        <div className="py-3">
          <h3 className="text-xl font-semibold">Name</h3>
          <input
            type="text"
            className="border border-gray-300 rounded-lg w-full p-3 mt-2"
            placeholder="Your Name"
          />
        </div>

        {/* Email Input */}
        <div className="py-3">
          <h3 className="text-xl font-semibold">Email</h3>
          <input
            type="email"
            className="border border-gray-300 rounded-lg w-full p-3 mt-2"
            placeholder="Your Email"
          />
        </div>

        {/* Message Input */}
        <div className="py-3">
          <h3 className="text-xl font-semibold">Message</h3>
          <textarea
            className="border border-gray-300 rounded-lg w-full p-3 mt-2"
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Send Message Button */}
        <div className="mt-6">
          <PrimaryButton
            title="Send Message"
            containerStyles="h-14 rounded-xl text-white bg-[var(--primary-color)] max-w-[250px]"
            onClick={handleSendEmail}
          />
        </div>
      </div>
    </div>
  );
};

export default contact;

import { CallIcon, LocationIcon } from "../assets/icons/svg";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 md:p-20">
      <div className="text-center flex flex-col items-center justify-center">
        <h2 className="text-xl">Contact our team</h2>
        <h3 className="small_header text-gray-700 max-w-3xl">
          Got any questions about our product and services? We're here to help.
          Chat to our friendly team 24/7
        </h3>
      </div>

      <div className="flex gap-10 items-center w-full max-w-4xl mt-10">
        {/* Contact Form */}
        <form className="flex flex-col gap-5 justify-center flex-1 max-w-xl w-full mx-auto py-12">
          <div className="flex gap-5">
            <Input className="h-12" placeholder="First name" />
            <Input className="h-12" placeholder="Last name" />
          </div>

          <Input placeholder="you@company.com" className="h-12" />
          <Input placeholder="Phone number" className="h-12" />
          <Textarea placeholder="Leave us a message..." />

          <Button className="h-12 text-md bg-[var(--primary-color)] mt-6">
            Submit
          </Button>
        </form>

        <div className="gap-8 flex flex-col">
          {/* Chat Section */}
          <div className=" flex flex-col">
            <h2 className="text-[18px] font-bold text-gray-800">Call us </h2>
            <h2 className="text-[16px] ">Call our team Mon-Fri 8am to 5pm </h2>
            <div className="mt-4 flex gap-3 items-center">
              <CallIcon />
              <h3 className="font-medium text-lg ">00233 (0) 246414019</h3>
            </div>
          </div>
          {/* Visit US */}
          <div className=" flex flex-col">
            <h2 className="text-[18px] font-bold text-gray-800">Visit us </h2>
            <h2 className="text-[16px]">Chat to us in person in Accra</h2>
            <div className="mt-4 flex gap-3 items-center">
              <LocationIcon />
              <h3 className="font-medium text-lg ">1 Airport Residential </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

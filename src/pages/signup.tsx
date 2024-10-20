import LightButton from "../components/LightButton";
import Logo from "../components/logo";
import PrimaryButton from "../components/PrimaryButton";

const signup = () => {
  return (
    <>
      <div className="p-6 bg-black ">
        <a href="/">
          {" "}
          <Logo />
        </a>
      </div>
      <div className="bg-white flex flex-col items-center justify-center">
        <div className=" justify-center   flex flex-col  min-h-[600px] w-full max-w-md mt-12">
        <div>   <h3 className="header_text !text-[45px] mb-4 ">Sign up</h3></div>
          <div className="flex gap-4">
            <div className="py-4">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your firstname"
                className="mt-1"
              />
            </div>
            <div className="py-4">
              <label htmlFor="firstName">Lastname</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your firstname"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <label htmlFor="businessName">Business name</label>
            <input
              type="text"
              placeholder="Enter your business name"
              className="mt-1"
              id="businessName"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Where is your business located"
              className="mt-1"
              id="address"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="you@example.com"
              className="mt-1"
            />
          </div>
          <div className="mt-4">
            <h3>Password</h3>
            <input
              type="text"
              id="password"
              placeholder="*******"
              className="mt-1"
            />
          </div>

          <div className="mt-12">
            <PrimaryButton
              title={"Sign up"}
              containerStyles="h-14 rounded-xl min-w-[380px] text-white"
            />
            <a href="/signin">
              <LightButton
                title={"Sign in with Google"}
                containerStyles="mt-4 border !text-[var(--primary-color)] rounded-xl min-w-[150px]  "
              />
            </a>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default signup;

import LightButton from "../components/LightButton";
import Logo from "../components/logo";
import PrimaryButton from "../components/PrimaryButton";
import { useGoogleLogin } from "@react-oauth/google";

const signin = () => {
  const responseMessage = (response: unknown) => {
    console.log(response);
  };
  const errorMessage = (error: unknown) => {
    console.log(error);
  };

  // useGoogleLogin hook to handle login
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const login = useGoogleLogin({
    onSuccess: responseMessage,
    onError: errorMessage,
  });
  return (
    <>
      <div className="p-6 bg-black ">
        <Logo />
      </div>
      <div className="bg-white flex flex-col items-center justify-center">
        <div className=" justify-center   flex flex-col  min-h-[600px] w-full max-w-md mt-12">
          <div>
            {" "}
            <h3 className="header_text !text-[45px] mb-4 ">Sign in</h3>
          </div>
          <div>
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
              title={"Submit"}
              containerStyles="h-14 rounded-xl min-w-[380px] text-white"
            />
            {/* <a href="/signin">
              <LightButton
                title={"Sign in with Google"}
                containerStyles="mt-4 border !text-[var(--primary-color)] rounded-xl min-w-[150px]  "
              />
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </a> */}

            <LightButton
              title={"Sign in with Google"}
              containerStyles="mt-4 border !text-[var(--primary-color)] rounded-xl min-w-[150px]"
              onClick={() => login()} // Trigger the Google login
            />
          </div>

          <div className="flex items-center gap-1 justify-center mt-8 text-sm ">
            <h3>Dont have an account?</h3>
            <a href="/signup">
              <h3 className="!text-[var(--primary-color)] flex justify-center  ">
                Create an account
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default signin;

import Logo from "./logo";

const checkout = () => {
  return (
    <div>
      <div className="p-6 bg-black">
        <Logo />
      </div>

      <div className="bg-white">
        <h3 className=" header_text !text-[45px] mb-4 p-24  ">Checkout</h3>
        <div className=" grid grid-cols-1 lg:grid-cols-2 ">

          <div className="bg-[var(--page-bg)] p-12 rounded-xl  ">

          </div>
        </div>
      </div>
    </div>
  );
};

export default checkout;

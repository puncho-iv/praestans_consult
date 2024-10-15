import Image from "../assets/woman-making-mobile-payment.jpg"

const about = () => {
  return (
    <div className="min-h-screen p-64 " id="about">
      <h3 className="text-5xl flex justify-center mt-32">Abouts Us</h3>

      <div className="grid grid-cols-2 gap-20 text-lg mt-8">
      
      <div className="mt-20">
  <img
    src={Image}
    alt="Descriptive Alt Text"
    className="h-[700px] w-full rounded-xl object-cover"
  />
</div>

        <div className="flex space-y-6 gap-5">
          <h3>
            <p className="mt-32 ">
              Beyond basic transaction management, modern POS systems offer a
              range of features designed to enhance business performance. These
              include customer relationship management (CRM) tools, sales
              analytics, multi-location management, and integrations with
              accounting systems. A well-implemented POS system allows
              businesses to:
            </p>
            <ol className="list-decimal  mt-4  gap-2 flex flex-col">
              <strong>
                {" "}
                <li>
                  Streamline Operations: Automate inventory tracking, order
                  processing, and employee management, reducing manual errors
                  and saving time.
                </li>
              </strong>
              <strong>
                {" "}
                <li>
                  Improve Customer Experience: Speed up checkout times, offer
                  multiple payment options, and personalize the shopping
                  experience using customer data and purchase history.
                </li>
              </strong>
              <strong>
                {" "}
                <li>
                  Data-Driven Decisions: Access detailed sales reports and
                  performance metrics in real-time, helping businesses identify
                  trends, optimize pricing, and forecast demand.
                </li>
              </strong>

              <strong>
                <li>
                  Scalability: As the business grows, the POS system can adapt,
                  whether it's managing multiple store locations or expanding
                  into online sales channels.
                </li>
              </strong>
            </ol>

            <p className="mt-5">
              Our aim is to implement a POS solution that simplifies business
              operations, improves customer experience, and provides actionable
              insights to enhance decision-making. By streamlining payment
              processing and inventory management, we seek to optimize
              efficiency, reduce errors, and support business growth.
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default about;

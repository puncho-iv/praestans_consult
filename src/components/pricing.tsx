import PricingCard from "./pricingCard";

const pricing = () => {
  return (
    <div className="bg-black p-12 lg:p-24 min-h-screen" id="#pricing">
      <h3 className=" text-3xl lg:text-5xl flex justify-center text-white text-center mb-12">
        We believe we created the most efficient point of sale <br /> for our
        users
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2">
        <PricingCard
          price={500}
          title={"Basic"}
          features={[
            { name: "Inventory Management", available: true },
            { name: "Sales Reporting", available: true },
            { name: "Multi-Location Support", available: false },
            { name: "Customer Management (CRM)", available: false },
            { name: "Employee Management", available: true },
            { name: "Up to 2 Email Accounts", available: true },
            { name: "Customer USSD payments methods", available: false },
            { name: "Full Customization", available: false },
            { name: "Free Webpage", available: false },
          ]}
          button={"Buy Now🚀"}
        />
        <PricingCard
          price={600}
          title={"Stellar"}
          features={[
            { name: "Inventory Management", available: true },
            { name: "Sales Reporting", available: true },
            { name: "Multi-Location Support", available: true },
            { name: "Customer Management (CRM)", available: false },
            { name: "Employee Management", available: true },
            { name: "Up to 5 Email Accounts", available: true },
            { name: "Customer USSD payments methods", available: true },
            { name: "Partial Customization", available: true },
            { name: "Free Webpage", available: false },
          ]}
          button={"Buy Now🚀"}
        />
        <PricingCard
          price={700}
          title={"Pro"}
          features={[
            { name: "Inventory Management", available: true },
            { name: "Sales Reporting", available: true },
            { name: "Multi-Location Support", available: true },
            { name: "Customer Management (CRM)", available: true },
            { name: "Employee Management", available: true },
            { name: "Unlimited Email Accounts", available: true },
            { name: "Customer USSD payments methods", available: true },
            { name: "Full Customization", available: true },
            { name: "Free Webpage", available: false },
          ]}
          button={"Buy Now🚀"}
        />
      </div>
    </div>
  );
};

export default pricing;

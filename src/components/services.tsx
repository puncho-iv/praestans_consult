import { Button } from "./ui/button";

const serviceList = [
  {
    number: "1",
    title: "Data Analytics and Business Intelligence",
    point: [
      "Predictive and descriptive analytics",
      "Dashboards and visualization tools",
    ],
  },
  {
    number: "2",
    title: "Research Solutions",
    point: [
      "Academic and corporate research support",
      "Feasibility studies",
      "Policy and program evaluations",
    ],
  },
  {
    number: "3",
    title: "Training & Capacity Building",
    point: [
      "Workshops on research methodologies and data analytics tools",
      "Hands-on training in SPSS, STATA, Python, and Excel analytics",
    ],
  },
  {
    number: "4",
    title: "Survey Design & Administration",
    point: ["Questionnaire development", "Data collection and management"],
  },
  // {
  //   number: "5",
  //   title: "Strategic Consultancy",
  //   point: ["Market entry strategies", "Performance optimizations"],
  // },
];

const Services = () => {
  return (
    <div className="p-10 md:p-20  max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Header Section */}
        <div className="max-w-md">
          <h2 className="text-xl ">Services Offered</h2>
          <h3 className="small_header  text-gray-700 mt-5">
            Empower your business with Training & Capacity Building
          </h3>
          <p className="text-lg mt-4 max-w-sm text-gray-800">
            To deliver innovative, accurate, and timely research and analytics
            solutions that drive informed decision-making and foster growth for
            clients across diverse industries.
          </p>

          <div>
            <Button className="bg-[var(--primary-color)] mt-8 h-12 px-8 rounded-full text-md">
              Request a service
            </Button>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  md:gap-12 pt-10 md:pt-12">
          {serviceList.map((service, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex items-center justify-center font-bold text-lg w-10 h-10 bg-gray-200 rounded-full">
                {service.number}
              </div>
              <div className="font-semibold text-xl">{service.title}</div>
              <ul className="mt-2 space-y-2">
                {service.point.map((point, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-gray-600">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

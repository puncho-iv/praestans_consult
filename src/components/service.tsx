import { RightIcon } from "../assets/icons/svg";
import ServiceCard from "./card";
import Image1 from "../assets/images/Rectangle 22.png";
import Image2 from "../assets/images/Rectangle 22(1).png";
import Image3 from "../assets/images/Rectangle 22(2).png";

const service = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <h3 className="small_header">What We Do </h3>

      <div className="mt-12 flex gap-8">
        <ServiceCard
          image={<img src={Image1} alt="Service Image" />}
          title={"Data Analytics and Business Intelligence"}
          desc={[
            "Predictive and descriptive analytics",
            "Dashboards and visualization tools",
          ]}
          icon={<RightIcon />}
          iconText={"Learn More"}
        />
        <ServiceCard
          image={<img src={Image2} alt="Service Image" />}
          title={"Research Solutions"}
          desc={[
            "Academic and corporate research support",
            "Feasibility studies",
            "Policy and program evaluations",
          ]}
          icon={<RightIcon />}
          iconText={"Learn More"}
        />
        <ServiceCard
        image={<img src={Image3} alt="Service Image" />}
          title={"Training & Capacity Building"}
          desc={[
            "Workshops on research methodologies and data analytics tools",
            "Hands-on training in SPSS, STATA, Python, and Excel analytics",
          ]}
          icon={<RightIcon />}
          iconText={"Learn More"}
        />
      </div>
    </div>
  );
};

export default service;

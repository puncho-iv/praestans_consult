import CaseCard from "./pageComponents/caseCard";
import image from "../assets/images/_Asiama Junior from Pexels via Canva Pro.png"

const CaseStudies = () => {
  return (
    <div className="p-10 md:p-20  max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Header Section */}
        <div className="max-w-md">
          <h3 className="small_header max-w-[400px]  py-5">
            Case Studies
          </h3>
          <p>
            Discover how our data-driven insights have transformed businesses.
            From predictive analytics to strategic consultancy, explore
            real-world success stories where our expertise has driven measurable
            impact. 🚀
          </p>
        </div>

        <div className="grid grid-cols-2">
          <CaseCard image={image} number={0} title={"Presidential Elections"} desc={"Elections"} label={"Ghana | Accra"} />
          <CaseCard number={1} title={""} desc={""} label={""} image={""} />
          <CaseCard number={2} title={""} desc={""} label={""} image={""} />
          <CaseCard number={3} title={""} desc={""} label={""} image={""} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

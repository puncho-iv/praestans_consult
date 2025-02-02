import { DataIcon, DiamondIcon, DocumentIcon, GoalIcon, TrendIcon } from "../assets/icons/svg";
import Circles from "./pageComponents/circles";

const process = () => {
  return (
    <div className="p-10 md:p-20  max-w-[1440px] mx-auto">
      <div>
        <div className="flex justify-center flex-col text-center ">
          <h2>How we do it</h2>
          <h2 className="small_header">Chosen Usage Exmple</h2>
        </div>

        <div className="flex justify-between px-30 py-12">
            <div className="max-w-xl">
            <div className="absolute mt-6 left-[520px] right-0 h-[2px] max-w-5xl   border-t-2 border-dashed border-gray-400"></div>
          
            </div>
     <Circles
            deepColor={`var(--primary-color)`}
            lightColor={`var(--primary-color)`}
            text={"Collect Data"}
            image={<DataIcon size={30} />}
          />
          <Circles
            deepColor={`var(--brown-color)`}
            lightColor={`var(--brown-color)`}
            text={"Identify Trends"}
            image={<TrendIcon size={30}/>}
          />
                   <Circles
            deepColor={`var(--brown-color)`}
            lightColor={`var(--brown-color)`}
            text={"Understand"}
            image={<DocumentIcon size={30}/>}
          />
                 <Circles
            deepColor={`var(--brown-color)`}
            lightColor={`var(--brown-color)`}
            text={"Goals & Hypothesis"}
            image={<DiamondIcon size={30}/>}
          />
                   <Circles
            deepColor={`var(--brown-color)`}
            lightColor={`var(--brown-color)`}
            text={"Take Action"}
            image={<GoalIcon size={30}/>}
          />
        </div>
      </div>

      <div className="flex items-start flex-col md:flex-row justify-between py-20">
        <div className="max-w-3xl">
          <h2 className="small_header">Collect Accurate Data</h2>
          <h3 className="text-lg max-w-2xl text-gray-800 mt-5">
            Accurate data collection is the foundation of effective analytics
            and research. Reliable data ensures precise insights, informed
            decision-making, and meaningful conclusions. To achieve accuracy,
            use standardized data collection methods, validate sources, and
            minimize biases. Regularly cleaning and verifying data helps
            maintain integrity, reducing errors and inconsistencies. With
            accurate data, businesses and researchers can make strategic,
            evidence-based decisions that drive success.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default process;

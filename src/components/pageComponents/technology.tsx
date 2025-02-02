import { ExcelLogo, PythonLogo, TableauLogo } from "../../assets/icons/svg";
import SPSS from "../../assets/images/SPSS_logo.png";
import Stata from "../../assets/images/logo-blue(1).png";

const technology = () => {
  return (
    <div className="px-48 -mt-8">
      <div className="flex lg:gap-32 bg-gray-200 p-8 justify-center rounded-xl items-center">
        <img src={SPSS} alt="Stata logo" className="w-36" />
        <ExcelLogo size={70} />
        <PythonLogo size={70} />
        <TableauLogo size={70} />
        <img src={Stata} alt="SPSS Logo" className="w-36" />
      </div>
    </div>
  );
};

export default technology;

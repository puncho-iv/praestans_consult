import { ExcelLogo, PythonLogo, TableauLogo } from "../../assets/icons/svg";
import SPSS from "../../assets/images/SPSS_logo.png";
import Stata from "../../assets/images/logo-blue(1).png";

const technology = () => {
  return (
    <div className="px-48 mt-12 relative">
      <div className="flex lg:gap-32 p-8 justify-center  items-center">
        <img src={SPSS} alt="Stata logo" className="w-24" />
        <ExcelLogo size={35} />
        <PythonLogo size={35} />
        <TableauLogo size={35} />
        <img src={Stata} alt="SPSS Logo" className="w-24" />
      </div>
    </div>
  );
};

export default technology;

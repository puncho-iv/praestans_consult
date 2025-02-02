import { ReactNode } from "react";

interface LayeredCircle {
  deepColor: string;
  lightColor: string;
  text: string;
  image: string | ReactNode;
}
const Circles = ({ deepColor, lightColor, text, image }: LayeredCircle) => {
  return (
    <div className="justify-center flex flex-col items-center">
      <div className="relative flex items-center justify-center  w-12 h-12 ">
        <div
          className="absolute w-3 h-3 rounded-full "
          style={{ backgroundColor: deepColor, borderColor: deepColor }}
        ></div>

        <div
          className="absolute w-6 h-6 bg-[rgba(230, 57, 70, 0.5)] rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: lightColor }}
        ></div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <span>{image}</span>

        <div className="text-[16px] font-semibold" style={{ color: deepColor }}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Circles;

interface IButton {
  title: string;
  containerStyles?: string;
  icon?: JSX.Element;
  textColor?: string;
  bgColor?: string;
  stroke?: string;
}

const PrimaryButton = ({
  title,
  containerStyles,
  icon,
  textColor,
  bgColor,
  stroke,
}: IButton) => {
  return (
    <div
      className={` h-12 ${containerStyles} flex items-center gap-3 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer `}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        border: stroke ? `1px solid ${stroke}` : "none",
      }}
    >
      {" "}
      <span>{icon}</span> {title}
    </div>
  );
};

export default PrimaryButton;

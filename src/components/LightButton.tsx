interface LightButtonProps {
  title: React.ReactNode;
  containerStyles?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  imageSrc?: React.ReactNode;
}

export const LightButton: React.FC<LightButtonProps> = ({
  title,
  imageSrc,
  containerStyles,
  onClick,
}) => {
  return (
    <button
      className={` ${containerStyles} rounded-full border border-[var(--primary-color20)] w-full hover:bg-[var(--primary-color)] hover:text-[var(--white-100)]  `}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 px-3  ">
        {imageSrc && <span className="flex items-center">{imageSrc}</span>}
        {title}
      </div>
    </button>
  );
};

export default LightButton;

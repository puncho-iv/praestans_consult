interface ICard {
  image?: JSX.Element;
  title: string;
  desc: string[];
  icon: JSX.Element;
  iconText: string;
}

const ServiceCard = ({ image, title, desc, icon, iconText }: ICard) => {
  return (
    <div className="max-w-sm bg-white space-y-6">
      <div>{image}</div>
<div className="p-6">

        <h3 className="font-medium text-[18px] text-[var(--text-span)]">
          {title}
        </h3>
        <div className="mt-4">
        {desc.map((item, index) => (
          <p key={index} className="text-[var(--text-color-80)] ">
            {item}
          </p>
        ))}
      </div>

      <div className="flex justify-between items py-6">
        <p>{iconText}</p>
        {icon}
      </div>
</div>
    </div>
  );
};

export default ServiceCard;
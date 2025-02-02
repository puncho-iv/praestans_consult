interface ICardProps {
  number: number;
  title: string;
  desc: string;
  label: string;
  image: string;
}

const CaseCard = ({ number, title, desc, label, image }: ICardProps) => {
  return (
    <div className="relative flex flex-col p-6 border bg-white  rounded-lg min-w-[400px] min-h-[200px] text-3xl font-semibold z-10">
      <div className="absolute top-0 left-0 w-full h-full flex p-6 bg-black bg-opacity-50 rounded-lg">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-30"
        />
        <div className="mt- flex flex-col">
          <h2 className="text-4xl text-white">{number}</h2>
          <h2 className="text-lg font-semibold max-w-md mt-4 text-white">
            {title}
          </h2>
          <div className="flex flex-col flex-end mt-6">
            <p className="text-sm text-gray-300 mt-2">{desc}</p>
            <span className="text-sm font-medium text-gray-200">{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;

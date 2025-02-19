interface ITeamCardProps {
  role: string;
  name: string;
  bio: string;
  image: string;
}

const TeamCard = ({ role, name, bio, image }: ITeamCardProps) => {
  return (
    <div className="flex flex-col items-center bg-slate-300  rounded-2x overflow-hidden min-w-[350px] min-h-[400px] p-6 text-center">
      <img
        src={image}
        alt={name}
        className="rounded-xl  object-cover w-full h-full"
      />
      <h2 className="mt-4 text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-[#9D4444] font-medium">{role}</p>
      <p className="text-sm text-gray-600 mt-2">{bio}</p>
    </div>
  );
};

export default TeamCard;

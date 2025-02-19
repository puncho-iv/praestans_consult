import TeamCard from "./pageComponents/teamCard";

const team = () => {
  return (
    <div className="p-20 justify-center  max-w-[1440px] mx-auto mt-auto">
      <div className="flex flex-col items-center justify-center">
        <h2>Meet the team</h2>
        <h3 className="small_header max-w-[600px] text-center py-5">
          We bring a wealth of skills and experience from a wide range of
          backgrounds
        </h3>

        <div className="flex px-20 py-10 gap-8">
          <TeamCard role={"Founder"} name={"Mr Eric Karibayeng Arwaa"} bio={""} image={""}/>
          <TeamCard role={""} name={""} bio={""} image={""}/>
          <TeamCard role={""} name={""} bio={""} image={""}/>
          {/* <TeamCard role={""} name={""} bio={""} image={""}/> */}
        </div>
      </div>
    </div>
  );
};

export default team;

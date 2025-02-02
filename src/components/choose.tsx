import { Button } from "./ui/button";

const choose = () => {
  const chooseData = [
    {
      title: "Empower every business with Machine Learning",
      points: [
        "Workshops on research methodologies and data analytics tools",
        "Hands-on training in SPSS, STATA, Python and Excel analytics",
      ],
      values: [
        "Excellence & Integrity",
        "Innovation",
        "Client-centricity",
        "Collaboration",
      ],
    },
  ];
  return (
    <div>
      <div className="p-20 bg-[var(--gray-bg)] max-w-[1440px] mx-auto mt-auto ">
        <h2>Why Choose Us</h2>
        <h3 className="small_header max-w-[400px]    py-5">
          {chooseData.map((data, i) => (
            <div>
              <h3 className="small_header max-w-[400px] " key={i}>
                {data.title}
              </h3>
              <ul className="mt-5 space-y-2">
                {data.points.map((point) => (
                  <li className="items-start text-[17px] text-[var(--text-color)] ">
                    <span>•</span> {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4">
                {data.values.map((value) => (
                  <div className="flex items-center gap-2 text-sm font-semibold bg-[var(--gray)] rounded-full px-7 py-3 ">
                    <span className=" text-xl">
                      +
                    </span>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </h3>

        <div className="mt-5">
            <Button className="bg-[var(--primary-color)] rounded-full px-8 py-6">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default choose;

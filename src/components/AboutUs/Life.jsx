import React from "react";

const lifeData = [
  {
    id: 1,
    title: "Milestone Celebrations",
    description:
      "At HiveMinds, every milestone is a celebration. We honor team anniversaries and achievements with recognition and rewards that inspire ongoing excellence.",
  },
  {
    id: 2,
    title: "AHM (Annual Offsite & Monthly Meetups)",
    description:
      "AHM, our annual offsite and monthly meetups, bring us together to celebrate, learn, and strategize, fueling our culture of continuous innovation and collaboration.",
  },
  {
    id: 3,
    title: "Festive Celebrations",
    description:
      "Festivals at HiveMinds are a riot of color and creativity—complete with themed decor, festive food, and a contagious spirit that unites our team.",
  },
  {
    id: 4,
    title: "Team Parties",
    description:
      "Team parties are our way of saying ‘well done.’ We celebrate together with fun events that reinforce our strong bonds and shared successes.",
  },
];

const Life = () => {
  return (
    <section className="w-screen h-full py-[5%] relative" id="life-at-hiveminds">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center gap-[1vw] pb-[5vw]">
        <h2 className="heading-2 headinganim">
          Life At <span className="blue-text">Hiveminds?</span>
        </h2>
        <p className="content w-[70%] text-center fadein">
          Here, work feels like family. Our vibrant culture celebrates every
          achievement and embraces diverse traditions, fostering deep social
          bonds and a dynamic, inclusive community.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container-lg flex justify-between flex-wrap gap-[2vw]">
        {lifeData.map((item) => (
          <div
            key={item.id}
            className="w-[21.5vw] h-[25vw] rounded-[1.2vw] bg-white shadow-md py-[3.5vw] px-[1.3vw]"
          >
            <div className="flex flex-col gap-[2vw] h-full">
              <h4 className="text-[1.7vw] text-center">{item.title}</h4>
              <p className="text-[1.2vw] text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Background Section */}
      <div className="w-full h-[38%] bg-primary absolute bottom-0 z-[-1]"></div>
    </section>
  );
};

export default Life;

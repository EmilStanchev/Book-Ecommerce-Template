import team2 from "../../assets/images/team-3.jpg";
import team3 from "../../assets/images/team-4.jpg";
import team4 from "../../assets/images/team-5.jpg";

import EmployeeCard from "./EmployeeCard";

const TeamSection = () => {
  return (
    <div
      id="teamSection"
      className="flex flex-col justify-center items-center gap-5 my-10"
    >
      <h2 className="text-2xl">Our team</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-5 justify-center items-center gap-3">
        <EmployeeCard
          name="Victoria Allison"
          profession="CEO / Co-Founder"
          image={team4}
        />
        <EmployeeCard
          name="John Smith"
          profession="Administrator"
          image={team3}
        />
        <EmployeeCard
          name="Natalie Paisley"
          profession="CEO / Co-Founder"
          image={team2}
        />
      </div>
    </div>
  );
};

export default TeamSection;

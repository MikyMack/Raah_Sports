import { TbPlayFootball } from "react-icons/tb";
import { TbPlayVolleyball } from "react-icons/tb";
import { TbPlayBasketball } from "react-icons/tb";
import { MdOutlineSportsCricket } from "react-icons/md";

const skillsData = [
  {
    name: "COMPREHENSIVE TRAINING PROGRAMS",
    icon: <TbPlayFootball className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our flagship program focuses on providing top-tier football training delivered by seasoned masters of the game. From fundamental skills to advanced strategies, our comprehensive curriculum ensures that each player undergoes a transformative journey, evolving into a well-rounded footballer.",
    aosDelay: "0",
  },
  {
    name: "CATERING TO SCHOOL AND COLLEGE TEAMS",
    icon: <TbPlayVolleyball className="text-4xl text-primary" />,
    link: "#",
    description:
      "Raah Football Academy extends its expertise to school and college teams, fostering a culture of competitive excellence. We collaborate with educational institutions to enhance their football programs, offering specialized coaching, strategic insights, and access to our state-of-the-art facilities.",
    aosDelay: "300",
  },
  {
    name: "TALENT IDENTIFICATION AND PLAYER DEVELOPMENT",
    icon: <TbPlayBasketball className="text-4xl text-primary" />,
    link: "#",
    description:
      "We go beyond conventional training by actively identifying and nurturing exceptional talent. Through rigorous scouting programs, we handpick the best players emerging from schools and colleges, providing them with a platform to hone their skills and compete at higher levels.",
    aosDelay: "500",
  },
  {
    name: "FROM ACADEMY TO PROFESSIONALISM",
    icon: <MdOutlineSportsCricket className="text-4xl text-primary" />,
    link: "#",
    description:
      "Raah Football Academy takes pride in not only developing players but also paving a direct pathway to professionalism. Our commitment goes beyond the training ground, as we aspire to create a professional football team representing Kerala. The journey from our academy to the professional stage is a testament to our dedication to excellence.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Why Choose Raah Sports Development
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
             Choosing Raah Sports Development means choosing a pathway to success. Whether you are an aspiring young talent or a seasoned athlete aiming for new heights, we provide the platform, resources, and mentorship to help you achieve your goals. Join us on this exciting journey as we pave the way for a future where sports transcend boundaries, and champions emerge from every corner. Raah Sports Development Private Limited – where the journey to excellence begins!
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

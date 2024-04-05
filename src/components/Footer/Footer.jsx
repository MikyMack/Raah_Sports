import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import img from "../../assets/blog/diamond.png";

const FooterLinks = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Contact Now",
    link: "/contact",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "/#Subscribe",
  },
];
const Footer = () => {
  return (
    <>
      <img src={img} data-aos="fade-up" alt="image" className="pt-11 shadow-2xl shadow-primary" />
      <div className="bg-dark text-white">
        <section className="container py-10">
          <div className=" grid md:grid-cols-3 py-5">
            {/* company Details */}
            <div className=" py-5 px-4 ">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                RAAH SPORTS DEVELOPMENT PRIVATE LIMITED
              </h1>
              <p className="text-sm flex flex-row pb-2">
                <span className="pt-1 mr-1">{<CiLocationOn />}</span>
                1st Floor Pandavath Building Pattithanan Kottayam Kerala India
                pin 686631
              </p>
              <p className="text-sm flex flex-row pb-2">
                <span className="pt-1 mr-1">{<MdOutlineAttachEmail />}</span>
                Info@raahsports.com , Raahsports@gmail.com
              </p>
              <p className="text-sm flex flex-row pb-2">
                <span className="pt-1 mr-1">{<FaPhone />}</span>
                +919995026505
              </p>

              <br />
              {/* Social Handle */}
              <div className="flex items-center gap-4 mt-6">
                <a href="#">
                  <FaInstagram className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                </a>
              </div>
              <p className="text-sm flex flex-row pt-8">
                Copyright ©2024 A2Z Alphabet Solutionz PVT.LTD. All Rights
                Reserved .
              </p>
            </div>
            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Company
                  </h1>
                  <ul className={`flex flex-col gap-3`}>
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Help
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {HelpLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Contact Now
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {ResourcesLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;

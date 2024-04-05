import img from "../../assets/blog/diamond.png";

const BrandsLogo = () => {
  return (
    <>
      <img
        data-aos="fade-up"
        src={img}
        alt="image"
        className="pt-11 shadow-2xl shadow-primary"
      />
      <div className="dark:bg-gray-950 dark:text-white duration-300 container mb-12 mt-12 sm:mt-0 bg-slate-200">
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          className="py-6 px-4 md:px-10 lg:px-20 xl:px-32 flex flex-wrap justify-center gap-4"
        >
          <div className="w-full md:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h5 className="text-lg font-semibold text-primary mb-2  dark:text-primary">
                COMPREHENSIVE TRAINING PROGRAMS
              </h5>
              <p className="text-sm text-blue-gray  dark:text-black">
                Our meticulously designed training programs cover a spectrum of
                sports, ensuring a well-rounded development for athletes.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h5 className="text-lg font-semibold text-primary mb-2  dark:text-primary">
                EXPERT COACHING
              </h5>
              <p className="text-sm text-blue-gray  dark:text-black">
                Our team of seasoned coaches comprises experts in their
                respective fields, dedicated to honing the skills of each
                athlete under our wing
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h5 className="text-lg font-semibold text-primary mb-2  dark:text-primary">
                STATE-OF-THE-ART FACILITIES
              </h5>
              <p className="text-sm text-blue-gray  dark:text-black">
                We boast top-notch facilities equipped with the latest
                technology, creating an environment conducive to optimal
                performance.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h5 className="text-lg font-semibold text-primary mb-2  dark:text-primary">
                HOLISTIC APPROACH
              </h5>
              <p className="text-sm text-blue-gray  dark:text-black">
                We recognize the importance of mental and physical well being in
                sports. Our holistic approach encompasses not just training but
                also mental conditioning, nutrition, and injury prevention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;

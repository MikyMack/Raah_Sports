
import Slider from "react-slick";
import img1 from "../assets/website/banner-kids.jpg";
import img2 from "../assets/website/banner-kids1.jpg";
import img3 from "../assets/website/banner-volley.jpg";

const testimonialData = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 1,
    img: img2,
  },
  {
    id: 1,
    img: img3,
  },
];

const HomePageBanner = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 3000, // Set autoplay speed to 1000ms (1 second)
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-3xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[400px] w-full sm:w-[600px] object-cover rounded-3xl shadow-xl"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;

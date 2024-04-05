import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/footballkerala.jpg";
import Img2 from "../../assets/blog/volleyballkerala.jpg";
import Img3 from "../../assets/blog/basketballplaying.jpg";
import { Link } from "react-router-dom";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "VISION",
    description:
      "“At Raah Football Academy, we envision a future where football transcends boundaries, and the spirit of the game is instilled in the hearts of aspiring athletes. Our vision is to become the epicenter of football development in Kerala, cultivating talent that not only excels on the field but also embodies the values of sportsmanship and camaraderie",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "MISSION",
    description:
      "“At Raah Sports Development, our mission is to redefine sports development by providing unparalleled training, infrastructure, and opportunities for aspiring athletes. We believe in nurturing talent from the grassroots, offering a structured pathway for athletes to realize their full potential and make a mark on the global stage ",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "ABOUT US",
    description:
      "“Welcome to the dynamic world of sports excellence, where passion meets precision – introducing Raah Sports Development Private Limited. We are not just a sports organization; we are architects of athletic growth, committed to sculpting the champions of tomorrow",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Gallery
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <Link to='/gallery'>
              <button className="primary-btn">View All Images</button>
            </Link>

          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;

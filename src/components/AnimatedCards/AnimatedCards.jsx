import Photo1 from "../../assets/blog/basketballplaying.jpg";
import Photo2 from "../../assets/blog/footballkerala.jpg";
import Photo3 from "../../assets/blog/volleyballkerala.jpg";
import Photo4 from "../../assets/blog/group.jpg";
import Photo5 from "../../assets/blog/CoachMain.jpg";
import Photo6 from "../../assets/blog/coach2.jpg";
import Photo7 from "../../assets/blog/keralainag.jpg"
import Photo8 from "../../assets/blog/2V6A7338.jpg"
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from 'prop-types';

const CardsData = [
  {
    id: 1,
    img: Photo7,
    title: "Inaguration",
    desc: "",
  },
  {
    id: 2,
    img: Photo8,
    title: "Inaguaration",
    desc: "",
  },
  {
    id: 3,
    img: Photo3,
    title: "beachvolleyball",
    desc: "",
  },
  {
    id: 4,
    img: Photo4,
    title: "football",
    desc: "",
  },
  {
    id: 5,
    img: Photo5,
    title: "football",
    desc: "",
  },
  {
    id: 6,
    img: Photo1,
    title: "football",
    desc: "",
  },
  {
    id: 7,
    img: Photo6,
    title: "football",
    desc: "",
  },
  {
    id: 8,
    img: Photo2,
    title: "football",
    desc: "",
  },
];
const AnimatedCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };
  return (
    <div className="container mx-auto dark:bg-black dark:text-white">
      <h1 className="text-center text-primary font-bold text-3xl pt-5 mb-14 mt-5 sm:mt-0 dark:text-white">
        Gallery
      </h1>
      <div className="grid grid-cols-1 pb-24 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title }) => (
          <div
            key={id}
            className="text-white shadow-md rounded-lg overflow-hidden relative group transition duration-500 ease-in-out transform hover:scale-105"
          >
            <img
              src={img}
              alt=""
              className="w-full max-w-[300px] h-[350px] rounded-lg object-cover cursor-pointer"
              onClick={() => openPopup(img)}
            />
            <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{title}</h1>
                <div>
                  <button
                    className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300"
                    onClick={() => openPopup(img)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImagePopup imgSrc={selectedImage} onClose={closePopup} />
      )}
    </div>
  );
};

export default AnimatedCard;

const ImagePopup = ({ imgSrc, onClose, onOutsideClick }) => {
  const handleClickOutside = (event) => {
    if (!event.target.closest(".popup-content")) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg popup-content">
        <img src={imgSrc} alt="Popup" className="w-full h-auto" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-lg hover:bg-opacity-75"
        >
          Close
        </button>
      </div>
    </div>
  );
};

ImagePopup.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
};

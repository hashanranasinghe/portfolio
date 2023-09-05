import "./gallery.css";
import { motion as m } from "framer-motion";
import Img1 from "../../assets/gallery/1.jpg";
import Img2 from "../../assets/gallery/2.jpg";
import Img3 from "../../assets/gallery/3.jpg";
import Img4 from "../../assets/gallery/4.jpg";
import Img5 from "../../assets/gallery/5.jpg";
import Img6 from "../../assets/gallery/6.jpg";
import Img7 from "../../assets/gallery/7.jpg";
import Img8 from "../../assets/gallery/8.jpg";
import Img9 from "../../assets/gallery/9.jpg";
import Img10 from "../../assets/gallery/10.jpg";
import Img11 from "../../assets/gallery/11.jpeg";

export default function GridGallery() {
  const images = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
  ];
  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };
  const childVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: "1",
      },
    },
  };
  return (
    <>
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
        // viewport={{ once: false }}
        variants={parentVariant}
        className="gallery mx-32"
        id="gallery"
      >
        {images.map((item, index) => {
          return (
            <>
              <m.div
                variants={childVariant}
                className="pics relative mx-1 my-2"
                key={index}
              >
                <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
                  <div className="absolute inset-0 bg-black opacity-70"></div>
                  <div className="mx-auto text-white z-10 self-center uppercase">
                    Hello World
                  </div>
                </div>
                <img
                  src={item.imgSrc}
                  alt={item.id}
                  style={{ width: "100%" }}
                />
              </m.div>
            </>
          );
        })}
      </m.div>
    </>
  );
}

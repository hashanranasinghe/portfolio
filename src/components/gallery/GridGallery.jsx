import "./gallery.css";
import { motion as m } from "framer-motion";
export default function GridGallery() {
  const images = [
    {
      id: 1,
      imgSrc: "../../../src/assets/gallery/1.jpg",
    },
    {
      id: 2,
      imgSrc: "../../../src/assets/gallery/2.jpg",
    },
    {
      id: 3,
      imgSrc: "../../../src/assets/gallery/3.jpg",
    },
    {
      id: 4,
      imgSrc: "../../../src/assets/gallery/4.jpg",
    },
    {
      id: 5,
      imgSrc: "../../../src/assets/gallery/5.jpg",
    },
    {
      id: 6,
      imgSrc: "../../../src/assets/gallery/6.jpg",
    },
    {
      id: 7,
      imgSrc: "../../../src/assets/gallery/7.jpg",
    },
    {
      id: 8,
      imgSrc: "../../../src/assets/gallery/8.jpg",
    },
    {
      id: 9,
      imgSrc: "../../../src/assets/gallery/9.jpg",
    },
    {
      id: 10,
      imgSrc: "../../../src/assets/gallery/10.jpg",
    },
    {
      id: 11,
      imgSrc: "../../../src/assets/gallery/11.jpeg",
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
              className="pics relative mx-1 my-2" key={index}>
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

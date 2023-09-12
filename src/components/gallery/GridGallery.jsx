import "./gallery.css";
import { motion as m } from "framer-motion";
import T1 from "../../assets/gallery/t1.jpg";
import T2 from "../../assets/gallery/t2.jpg";
import Y1 from "../../assets/gallery/y1.jpg";
import H1 from "../../assets/gallery/h1.jpg";
import H2 from "../../assets/gallery/h2.jpg";
import H3 from "../../assets/gallery/h3.jpg";
import H4 from "../../assets/gallery/h4.jpg";

export default function GridGallery() {
  const images = [
    {
      id: 1,
      imgSrc: T1,
      title: "TARANAYA - 2021",
    },
    {
      id: 2,
      imgSrc: T2,
      title: "TARANAYA - 2021",
    },
    {
      id: 3,
      imgSrc: Y1,
      title: "YOUTH DAY - 2023",
    },
    {
      id: 4,
      imgSrc: H1,
      title: "HACKADEV - 2022",
    },
    {
      id: 5,
      imgSrc: H2,
      title: "HACKADEV - 2022",
    },
    {
      id: 6,
      imgSrc: H3,
      title: "HACKADEV - 2022",
    },
    {
      id: 7,
      imgSrc: H4,
      title: "HACKADEV - 2022",
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
      {" "}
      <h1
        id="gallery"
        className="text-blue-700 font-bold text-5xl py-10 text-center"
      >
        My Gallery
      </h1>
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
        // viewport={{ once: false }}
        variants={parentVariant}
        className="gallery xl:mx-32"
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
                  <div className="mx-auto text-white z-10 self-center uppercase font-semibold">
                    {item.title}
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

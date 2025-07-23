"use client";
import React, { useState } from "react";
import {
  motion as m,
  AnimatePresence,
  cubicBezier,
  Transition,
} from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import galleryData from "@/data/galleryData";
import { Gallery } from "@/types/Gallery";

// Mock gallery data - replace with your actual import
const gallery = galleryData;

export default function GridGallery() {
  const images = gallery;
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);

  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const springSoft: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  const springTight: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };
  const childVariant = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: springSoft,
    },
  };

  const modalVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: springTight,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showMoreItems = () => {
    console.log("Current visibleItems:", visibleItems);
    setVisibleItems((prev) => Math.min(prev + 3, images.length));
  };

  return (
    <section
      className="bg-[url('/portfolio/images/sec2.png')] bg-cover bg-center w-full rounded-4xl"
      id="#gallery"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <m.div
          className="text-center mb-8 pt-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <m.h2
            className="text-2xl md:text-4xl font-bold mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-realWhite">My</span>{" "}
            <span className="bg-clip-text text-orange font-extrabold">
              Gallery
            </span>
          </m.h2>
          <m.p
            className="text-realWhite text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Explore a curated collection of moments, memories, and artistic
            expressions
          </m.p>
        </m.div>

        {/* Gallery Grid */}
        <m.div
          initial="hidden"
          animate="show"
          variants={parentVariant}
          className="flex flex-wrap px-6 justify-center"
          key={visibleItems} // Add key to force re-animation when items change
        >
          {images.slice(0, visibleItems).map((item, index) => {
            // Different widths but same height
            const widths = ["w-72", "w-80", "w-64", "w-96", "w-76"];
            const widthClass = widths[index % widths.length];

            return (
              <m.div
                key={item.id}
                variants={childVariant}
                className={`group relative cursor-pointer ${widthClass} flex-shrink-0`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                initial="hidden"
                animate="show"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 my-2 mx-2">
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />

                  {/* Hover Icons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="flex gap-4">
                      <m.div
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ZoomIn className="w-6 h-6 text-white" />
                      </m.div>
                    </div>
                  </div>

                  {/* Image */}
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-realWhite font-semibold text-lg mb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {item.title}
                    </h3>
                    <div className="w-0 group-hover:w-12 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full transition-all duration-500" />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      #{index + 1}
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </m.div>

        {/* Load More Button */}
        {visibleItems < images.length && (
          <m.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <m.button
              onClick={showMoreItems}
              className="group relative px-8 py-4 mb-10 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Load More Masterpieces</span>
              <m.div
                className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
                style={{ transformOrigin: "center" }}
              />
            </m.button>
          </m.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <m.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <m.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedImage.imgSrc}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              <div className="p-6 bg-gradient-to-t from-slate-900 to-slate-800">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}

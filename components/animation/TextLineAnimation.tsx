"use client";
import React from "react";
import { Sparkle } from "lucide-react";

const TextLineAnimation = () => {
  const skills = [
    "Dart",
    "Python",
    "JS",
    "Java",
    "PHP",
    "C#",
    "C",
    "Flutter",
    "Express JS",
    "React JS",
    "Next JS",
    "Nest JS",
    "Apache Airflow",
    "Apache Kafka",
    "Grafana",
    "Firebase",
    "Mongodb",
    "MYSQL",
    "PostgreSQL",
  ];

  return (
    <div className="w-full overflow-hidden relative bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 ">
      {/* Full-width orange horizontal div with slight angle */}
      <div
        className="w-full bg-realWhite shadow-lg relative overflow-hidden"
        style={{
          transform: "rotate(-2deg)",
          transformOrigin: "center",
          height: "30px",
          width: "110%",
          marginLeft: "-5%",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Primary moving text on white background sections */}
        <div className="flex whitespace-nowrap animate-scroll items-center h-full relative z-20">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {skills.map((skill, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center">
                  {/* White background for each text item */}
                  <span className="text-realBlack text-base md:text-lg whitespace-nowrap">
                    {skill}
                  </span>
                  {/* Orange separator dot */}
                  <Sparkle color="orange" className="m-2" />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Edge fade effects */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-orange-500 to-transparent pointer-events-none z-30"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-orange-600 to-transparent pointer-events-none z-30"></div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 45s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TextLineAnimation;

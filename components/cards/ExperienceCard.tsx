import { useState } from 'react';
import { Building2, Calendar, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { motion} from "framer-motion";
import { Education } from '@/types/Education';

const ExperienceCard: React.FC<Education>  = ({ id, place, title, duration, description}) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <motion.div
      className={`
        w-full md:w-5/12 
        ${id % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}
      `}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

        {/* Card Content */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 hover:border-purple-400/50 transition-all duration-300">
          {/* Company Info */}
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
            <h3 className="text-base md:text-lg font-bold text-black">
              {place}
            </h3>
          </div>

          {/* Position */}
          <motion.h4
            className="text-sm md:text-md font-semibold bg-clip-text text-orange-400 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + id * 0.2 }}
          >
            {title}
          </motion.h4>

          {/* Duration */}
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-white font-medium text-sm md:text-base">
              {duration}
            </span>
          </div>

          {/* Toggle Button for Description */}
          <button
            onClick={toggleDescription}
            className="flex items-center gap-2 mb-4 px-3 py-2 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 text-realWhite rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <span className="text-xs md:text-sm font-medium">
              {isDescriptionOpen ? 'Hide Details' : 'View Details'}
            </span>
            {isDescriptionOpen ? (
              <ChevronUp className="w-4 h-4 text-realWhite" />
            ) : (
              <ChevronDown className="w-4 h-4 text-realWhite" />
            )}
          </button>

          {/* Description with Animation */}
          <motion.div
            initial={false}
            animate={{
              height: isDescriptionOpen ? 'auto' : 0,
              opacity: isDescriptionOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 leading-relaxed pb-2 text-sm md:text-base">
              {description}
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-3 right-3 md:top-4 md:right-4">
            <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-purple-400/50" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
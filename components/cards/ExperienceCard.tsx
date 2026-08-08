import { useState } from "react";
import { Building2, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Education } from "@/types/Education";

const ExperienceCard: React.FC<Education> = ({
  id,
  place,
  title,
  duration,
  description,
}) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div
      className={`w-full md:w-5/12 ${
        id % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      }`}
    >
      <div className="rounded-2xl border border-border bg-surface p-6 md:p-7 hover:border-orange transition-colors duration-300">
        <div className="flex items-center gap-3 mb-3">
          <Building2 className="w-4 h-4 text-orange" />
          <h3 className="text-base font-semibold text-foreground">{place}</h3>
        </div>

        <h4 className="text-sm font-medium text-orange mb-3">{title}</h4>

        {duration && (
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-3.5 h-3.5 text-muted" />
            <span className="font-mono text-xs text-muted">{duration}</span>
          </div>
        )}

        <button
          onClick={() => setIsDescriptionOpen((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-orange transition-colors"
        >
          {isDescriptionOpen ? "Hide details" : "View details"}
          {isDescriptionOpen ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isDescriptionOpen ? "auto" : 0,
            opacity: isDescriptionOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-sm text-muted leading-relaxed whitespace-pre-line pt-4">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceCard;

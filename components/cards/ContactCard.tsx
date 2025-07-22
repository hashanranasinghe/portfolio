import { Contact } from "@/types/Contact";
import { FiArrowUpRight } from "react-icons/fi";

export const ContactCard = ({ contact }: { contact: Contact }) => (
  <div className="relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden h-full shadow-lg hover:shadow-xl">
    {/* Card background gradient */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${contact.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
    />

    {/* Hover glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-5 blur-xl`}
      />
    </div>

    <div className="relative z-10">
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}
      >
        {contact.icon}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">{contact.label}</h3>
          {contact.href && (
            <FiArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:scale-110 transition-all duration-300" />
          )}
        </div>

        <p className="text-slate-500 text-sm leading-relaxed">
          {contact.description}
        </p>

        <p className="text-slate-700 font-medium text-lg break-all">
          {contact.value}
        </p>
      </div>
    </div>

    {/* Animated border */}
    <div className="absolute inset-0 rounded-3xl">
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-500`}
      />
    </div>
  </div>
);

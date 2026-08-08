import { Contact } from "@/types/Contact";
import { FiArrowUpRight } from "react-icons/fi";

export const ContactCard = ({ contact }: { contact: Contact }) => (
  <div className="group relative p-6 rounded-2xl border border-border bg-surface hover:border-orange transition-colors duration-300 h-full">
    <div className="flex items-center justify-between mb-4">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border text-orange">
        {contact.icon}
      </div>
      {contact.href && (
        <FiArrowUpRight className="w-4 h-4 text-muted group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      )}
    </div>

    <h3 className="text-base font-semibold text-foreground mb-1">
      {contact.label}
    </h3>
    <p className="text-sm text-muted mb-2">{contact.description}</p>
    <p className="text-foreground font-medium break-words">{contact.value}</p>
  </div>
);

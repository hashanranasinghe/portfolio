import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import type { Contact } from "@/types/Contact";
import { createElement } from "react";
export default [
  {
    icon: createElement(FiMail, { className: "w-8 h-8" }),
    label: "Email",
    value: "hashan.ranasinghe98@gmail.com",
    href: "mailto:hashan.ranasinghe98@gmail.com",
    description: "Drop me a line anytime",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: createElement(FiPhone, { className: "w-8 h-8" }),
    label: "Phone",
    value: "+94 76 635 2298",
    href: "tel:+94766352298",
    description: "Let's have a quick chat",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    icon: createElement(FiMapPin, { className: "w-8 h-8" }),
    label: "Location",
    value: "Kandy, Sri Lanka",
    description: "Beautiful hill country",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
] satisfies Contact[];

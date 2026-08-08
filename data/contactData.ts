import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import type { Contact } from "@/types/Contact";
import { createElement } from "react";
export default [
  {
    icon: createElement(FiMail, { className: "w-6 h-6" }),
    label: "Email",
    value: "hashanranasinghe98@gmail.com",
    href: "mailto:hashanranasinghe98@gmail.com",
    description: "Drop me a line anytime",
  },
  {
    icon: createElement(FiPhone, { className: "w-6 h-6" }),
    label: "Phone",
    value: "+94 76 635 2298",
    href: "tel:+94766352298",
    description: "Let's have a quick chat",
  },
  {
    icon: createElement(FiMapPin, { className: "w-6 h-6" }),
    label: "Location",
    value: "Kandy, Sri Lanka",
    description: "Beautiful hill country",
  },
] satisfies Contact[];

import { ReactNode } from "react";

export interface Contact {
  icon: ReactNode;
  label: string;
  value: string;
  description: string;
  gradient: string;
  bgGradient: string;
  href?: string;
}

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function herfLink(link) {
  if (link.slice(0, 8) == "https://") return link;
  return "https://" + link;
}

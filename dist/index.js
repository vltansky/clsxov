import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function clsxov(...classes) {
  return twMerge(clsx(classes));
}

export default clsxov;

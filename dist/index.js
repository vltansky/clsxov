// src/clsxov.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function clsxov(...classes) {
  return twMerge(clsx(classes));
}
export {
  clsxov
};

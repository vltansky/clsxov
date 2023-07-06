import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line functional/functional-parameters, functional/prefer-readonly-type
export function clsxov(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export default clsxov;

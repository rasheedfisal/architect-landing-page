import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const picked: Partial<Pick<T, K>> = {};
  keys.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      picked[key] = obj[key];
    }
  });
  return picked as Pick<T, K>;
}

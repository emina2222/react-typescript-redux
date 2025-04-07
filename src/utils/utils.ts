import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseDateYear(date: string) {
  const parsedDate = new Date(date)
  return parsedDate.getFullYear()
}

export function parseDate(date: string) {
  return new Date(date)
}
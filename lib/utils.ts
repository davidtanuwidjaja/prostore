import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format a number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toFixed(2).split('.');
  return decimal ? `${int}.${decimal}` : `${int}.00`;
}
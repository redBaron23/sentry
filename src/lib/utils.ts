import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserInitials(userName: string): string {
  if (!userName) return "";

  const names = userName.trim().split(" ");
  let initials = "";

  if (names.length === 1) {
    const firstChar = names[0].charAt(0);
    if (/[a-zA-Z]/.test(firstChar)) {
      initials = firstChar.toUpperCase();
    }
  } else {
    const firstChar = names[0].charAt(0);
    const lastChar = names[names.length - 1].charAt(0);

    if (/[a-zA-Z]/.test(firstChar)) {
      initials += firstChar.toUpperCase();
    }
    if (/[a-zA-Z]/.test(lastChar)) {
      initials += lastChar.toUpperCase();
    }
  }

  return initials;
}

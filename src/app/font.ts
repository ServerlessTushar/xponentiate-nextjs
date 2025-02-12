import { Roboto } from "next/font/google";

// Define different Roboto weights
export const robotoNormal = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const robotoMedium = Roboto({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export const robotoBold = Roboto({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});
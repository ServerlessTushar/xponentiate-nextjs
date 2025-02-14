import type { Metadata } from "next";
import "./globals.css";
import { robotoNormal } from "./font";
import logo from "../../public/homepage/logo.webp"

export const metadata: Metadata = {
  title: "Xponentiate | Healthcare Talent Acquisition & Leadership Solutions",
  description: "Xponentiate is a premier healthcare talent partner connecting organizations with high-impact professionals across clinical leadership, product management, and executive roles. Drive innovation in healthcare recruitment with our specialized talent solutions.",
  keywords: [
    "healthcare recruitment",
    "clinical leadership hiring",
    "healthcare talent acquisition",
    "medical executive search",
    "healthcare innovation staffing",
    "CXO recruitment healthcare",
    "healthcare product leadership"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoNormal.className}`}
      >
        {children}
      </body>
    </html>
  );
}

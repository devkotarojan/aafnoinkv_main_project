import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Fira_Code } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-firacode-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AafnoInk",
  description: "Custom designs made easy",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

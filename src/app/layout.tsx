import type { Metadata } from "next";
import {Baloo_Bhai_2} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const baloobhai2 = Baloo_Bhai_2({
  subsets:['latin','latin-ext'],
  weight:['400','500','600','700','800'],
  style:['normal']
});

export const metadata: Metadata = {
  title: "Dynamic Blog Post Website",
  description: "A dynamic blog post website that delivers engaging, customizable, and up-to-date content tailored to diverse audiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baloobhai2.className} antialiased`}
      >
        <div className="h-screen w-full flex md:flex-row flex-col">
        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}

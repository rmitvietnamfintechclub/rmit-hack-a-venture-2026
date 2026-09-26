import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RMIT Hack-A-Venture 2026", 
  description: "This competition aims to bridge the gap between technical expertise and business strategy by having students leverage cutting-edge technologies such as AI, Blockchain, Cybersecurity, etc. to develop innovative products that address challenges related to the United Nations Sustainable Development Goals (SDGs) in Vietnam.",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-b from-[#080303] via-[#0a0202] to-[#140505] antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
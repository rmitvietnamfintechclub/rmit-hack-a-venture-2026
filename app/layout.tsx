import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

// 2. Configure the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Add icons and other metadata to this object
export const metadata: Metadata = {
  title: "RMIT Hack-A-Venture 2025",
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
      <body className={`${poppins.className} bg-gradient-to-b from-[#10382C] to-[#0A1B15] antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hanafi Yaming – Web Developer Portfolio",
  description:
    "ดูผลงาน พอร์ตโฟลิโอ และประสบการณ์ของ Hanafi Yaming นักพัฒนาเว็บสาย Fullstack ที่เชี่ยวชาญทั้ง Frontend และ Backend",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

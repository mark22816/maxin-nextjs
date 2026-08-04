import { Geist, Geist_Mono } from "next/font/google";
import TopBar from "../components/ui/topbar";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
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
  title: "MAXIN - Insurance & Investments",
  description: "Life, Variable Life, Mutual Funds, Non-life Insurance, HMO, and Consulting Services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="fixed top-0 w-full z-60">
        <TopBar/>
        <Navbar />
        </div>
        {children}
        <Footer />
     
      </body>
    </html>
  );
}

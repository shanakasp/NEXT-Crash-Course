import { Rubik } from "next/font/google";
import "./globals.css";
const cabin = Rubik({ subsets: ["latin"] });

//components
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Create  App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

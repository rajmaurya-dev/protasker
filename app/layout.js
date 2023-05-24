import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";
import { ContextProvider } from "@/components/Clinets";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProTasker - Your Task Management Solution",
  description:
    "Stay organized, track your tasks, and achieve your goals with ProTasker - the ultimate to-do app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}

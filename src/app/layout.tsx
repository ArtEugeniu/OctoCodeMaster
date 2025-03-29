import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/global.scss";
import Header from "@/components/header/Header";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OctoCodeMaster",
  description: "A D E A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}

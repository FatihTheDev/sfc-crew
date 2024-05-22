import type { Metadata } from "next";
import "./globals.css";
import Nav from "./constants/Nav";

export const metadata: Metadata = {
  title: "Street Fleet Crew",
  description: "Community in which you trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

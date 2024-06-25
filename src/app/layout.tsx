import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Carent",
  description: "Rent Cars where every you are !"
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
      <MantineProvider>
        <Navbar />
        {children}
        </MantineProvider>
      </body>
    </html>
  );
}

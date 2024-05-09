import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./themeProvider";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { twMerge } from "tailwind-merge";
import Provider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={twMerge(inter.className, "m-0 h-screen flex flex-col")}
        suppressHydrationWarning
      >
        {" "}
        <Provider>
          {/* HEADER */}
          <Header />
          {/* MAIN CONTENT */}
          <main className="bg-neutral-800 w-full flex-grow">{children}</main>
          {/* FOOTER */}
          <Footer />
        </Provider>
        {/* eslint-disable-next-line */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}

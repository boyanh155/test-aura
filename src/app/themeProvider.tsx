"use client";

import { ThemeProvider } from "next-themes";
type Props = {
  children: React.ReactNode;
};


const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" >
      {children}
    </ThemeProvider>
  );
};

export default Provider;

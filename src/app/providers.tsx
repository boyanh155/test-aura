'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ThemeProvider from "./themeProvider";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();
const providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default providers;

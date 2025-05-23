'use client';

import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextUIProvider>
        {children}
        <Toaster richColors position="top-center" />
      </NextUIProvider>
    </ThemeProvider>
  );
} 
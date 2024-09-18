"use client"; // Mark this as a client component

import { store } from "@/sotre/store";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";

interface ClientProviderProps {
  children: React.ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return (
    <ClerkProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </ClerkProvider>
  );
}

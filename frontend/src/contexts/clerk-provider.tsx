import { ClerkProvider as ReactClerkProvider } from "@clerk/clerk-react";
import { ReactNode } from "react";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

type Props = {
  children: ReactNode;
};

export function ClerkProvider({ children }: Props) {
  return (
    <ReactClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/sign-in"
    >
      {children}
    </ReactClerkProvider>
  );
}

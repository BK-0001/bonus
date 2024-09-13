import { ClerkProvider } from "./clerk-provider";
import { RouterProvider } from "./router-provider";

export function Providers() {
  return (
    <ClerkProvider>
      <RouterProvider />
    </ClerkProvider>
  );
}

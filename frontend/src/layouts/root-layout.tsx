import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        header
        <nav></nav>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <p>loading...</p>;
  }

  if (!isSignedIn) {
    <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}

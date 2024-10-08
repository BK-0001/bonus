import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import AnotherPage from "../pages/another";
import { HomePage } from "../pages/home";
import ProtectedRoutes from "./protected-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/another", element: <AnotherPage /> }
        ]
      }
    ]
  },
  {
    path: "/sign-in",
    element: <AuthenticateWithRedirectCallback />
  },
  { path: "/hello", element: <div>hellos</div> }
]);

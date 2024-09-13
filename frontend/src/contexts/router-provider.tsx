import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { router } from "../router/routes";

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

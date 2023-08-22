import { lazy } from "react";
import AppLayout from "../layout/AppLayout";
import { BasePaths } from "./path";

export const BaseRoutes = [
  {
    path: "/*",
    exact: true,
    component: lazy(() => import("../modules/authentication/routes")),
    Layout: null,
    useAuth: false,
  },
  {
    path: `${BasePaths.ADMINS}/*`,
    exact: true,
    component: lazy(() => import("../modules/admin/routes")),
    Layout: AppLayout,
    useAuth: true,
  },
];

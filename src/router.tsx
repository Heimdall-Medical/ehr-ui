import { Route, Routes } from "react-router";

import { ROUTES } from "@/config/routes";

import Callback from "./routes/callback";
import Dashboard from "./routes/dashboard/dashboard";
import Landing from "./routes/landing";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Landing />} index={true} />
      <Route path={ROUTES.DASHBOARD.NAME} element={<Dashboard />} />
      <Route path="callback" element={<Callback />} />
    </Routes>
  );
}

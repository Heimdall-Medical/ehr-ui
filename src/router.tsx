import { BrowserRouter, Route, Routes } from "react-router";

import { ROUTES } from "@/config/routes";

import Dashboard from "./routes/dashboard/dashboard";
import Landing from "./routes/landing";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} index={true} />
        <Route path={ROUTES.DASHBOARD.NAME} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

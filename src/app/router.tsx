import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router";

import AuthGuard from "@/components/auth-guard";
import { ROUTES } from "@/config/routes";

import Callback from "./routes/callback";
import Dashboard from "./routes/dashboard/dashboard";
import Landing from "./routes/landing";

function AppRoutes() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Callback />;
  }

  return (
    <Routes>
      <Route element={<Landing />} index={true} />
      <Route path="callback" element={<Callback />} />
      <Route
        path={ROUTES.DASHBOARD.PATH}
        element={<AuthGuard element={Dashboard} />}
      />
    </Routes>
  );
}

export default AppRoutes;

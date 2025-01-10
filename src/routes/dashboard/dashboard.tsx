import AppDashboard from "@/features/dashboard/dashboard";
import { WithSidebar } from "@/lib/with-sidebar";

function Dashboard() {
  return <AppDashboard />;
}

export default WithSidebar(Dashboard);

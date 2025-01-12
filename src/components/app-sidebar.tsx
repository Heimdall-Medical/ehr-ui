import { useAuth0 } from "@auth0/auth0-react";
import { LayoutDashboard, Users } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { ROUTES } from "@/config/routes";

import { Account } from "./account";
import { LocationSwitcher } from "./location-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";

const items = [
  {
    title: ROUTES.DASHBOARD.NAME,
    url: `/${ROUTES.DASHBOARD.PATH}`,
    icon: LayoutDashboard,
  },
  {
    title: ROUTES.PATIENTS.NAME,
    url: "#",
    icon: Users,
  },
];

export function AppSidebar() {
  const { getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  const getToken = useCallback(async () => {
    const token = await getAccessTokenSilently();
    setAccessToken(token);
  }, [getAccessTokenSilently]);

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    getToken();
  }, []);

  const renderLocationSwitcher = () => {
    if (accessToken) {
      return <LocationSwitcher />;
    }
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="w-3/4 space-y-2">
          <Skeleton className="h-4" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    );
  };

  const renderNavItems = () => {
    if (accessToken) {
      return items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ));
    }

    return Array.from({ length: 2 }).map((_item, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey:
      <div className="flex items-center space-x-4" key={index}>
        <Skeleton className="h-8 w-8 rounded-xl" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    ));
  };

  const renderFooter = () => {
    if (accessToken) {
      return <Account />;
    }

    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <div className="w-3/4 space-y-2">
          <Skeleton className="h-4" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    );
  };

  return (
    <Sidebar>
      <SidebarHeader>{renderLocationSwitcher()}</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="px-2">{renderNavItems()}</SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>{renderFooter()}</SidebarFooter>
    </Sidebar>
  );
}

import { LayoutDashboard, Users } from "lucide-react";

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
  return (
    <Sidebar>
      <SidebarHeader>
        <LocationSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenu className="px-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <Account />
      </SidebarFooter>
    </Sidebar>
  );
}

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function LocationSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center space-x-2 px-2">
        <div className="flex aspect-squre size-6 items-center">
          <img alt="logo" src="favicon.svg" />
        </div>
        <div className="grid flex-1 text-left leading-right">
          <span className="font-sans font-semibold">Hospital Name</span>
          <span className="font-sans">Location</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

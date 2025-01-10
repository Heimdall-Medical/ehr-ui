import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import type { ComponentType } from "react";

export function WithSidebar<P extends {}>(Comp: ComponentType<P>) {
  return (props: P) => (
    <SidebarProvider>
      <AppSidebar />
      <main className="container mx-auto w-full pt-2">
        <Comp {...props} />
      </main>
    </SidebarProvider>
  );
}

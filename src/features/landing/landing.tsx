import { useAuth0 } from "@auth0/auth0-react";

import Logo from "@/assets/logo-no-bg.svg";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/ui/navigation-menu-list-item";
import { ROUTES } from "@/config/routes";

function Landing() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: { returnTo: `/${ROUTES.DASHBOARD.PATH}` },
    });
  };

  return (
    <main className="flex h-dvh flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex space-x-8 p-4">
        <img alt="logo" className="w-[150px]" src={Logo} />
        <div className="flex grow justify-start">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-sans">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[250px] p-2">
                    <ListItem
                      href="#"
                      key="patient"
                      title="Patient Management"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button
          className="border-2 border-blue-600 hover:border-blue-50"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
      <div className="flex grow flex-col items-start justify-center self-center md:items-center">
        <span className="font-bold font-display text-4xl text-blue-50 md:text-5xl">
          All-Seeing System for
        </span>
        <span className="font-bold font-display text-4xl text-blue-50 md:text-5xl">
          Healthcare Professionals
        </span>
        <span className="mt-4 block font-sans text-2xl md:text-3xl">
          <span className="block sm:inline">Explore insights</span>&nbsp;at the
          touch of a button
        </span>
      </div>
    </main>
  );
}

export default Landing;

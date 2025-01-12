import { withAuthenticationRequired } from "@auth0/auth0-react";

import Callback from "@/app/routes/callback";

import type { ComponentType } from "react";

function AuthGuard({ element }: { element: ComponentType<object> }) {
  const Component = withAuthenticationRequired(element, {
    onRedirecting: () => <Callback />,
  });
  return <Component />;
}

export default AuthGuard;

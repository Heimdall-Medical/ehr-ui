import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

import { AUTH } from "@/config/auth";

import type { AppState } from "@auth0/auth0-react";
import type { PropsWithChildren } from "react";

function Auth0WithNav({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  const handleRedirect = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      authorizationParams={{ redirect_uri: AUTH.AUTH0_REDIRECT_URI }}
      clientId={AUTH.AUTH0_CLIENT_ID}
      domain={AUTH.AUTH0_DOMAIN}
      onRedirectCallback={handleRedirect}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0WithNav;

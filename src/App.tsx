import { Auth0Provider } from "@auth0/auth0-react";

import { AUTH } from "@/config/auth";

import Router from "./router";

function App() {
  return (
    <Auth0Provider
      domain={AUTH.AUTH0_DOMAIN}
      clientId={AUTH.AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: AUTH.AUTH0_REDIRECT_URI }}
    >
      <Router />
    </Auth0Provider>
  );
}

export default App;

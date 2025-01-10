import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router";

import { AUTH } from "@/config/auth";

import { AppRoutes } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain={AUTH.AUTH0_DOMAIN}
        clientId={AUTH.AUTH0_CLIENT_ID}
        authorizationParams={{ redirect_uri: AUTH.AUTH0_REDIRECT_URI }}
      >
        <AppRoutes />
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;

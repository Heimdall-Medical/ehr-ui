import { BrowserRouter } from "react-router";

import Auth0WithNav from "@/lib/auth0-with-nav";

import Routes from "./router";

function App() {
  return (
    <BrowserRouter>
      <Auth0WithNav>
        <Routes />
      </Auth0WithNav>
    </BrowserRouter>
  );
}

export default App;

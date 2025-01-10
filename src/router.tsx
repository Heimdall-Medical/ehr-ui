import { BrowserRouter, Route, Routes } from "react-router";

import Landing from "./routes/landing";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} index={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

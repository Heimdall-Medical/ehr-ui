import { BrowserRouter, Route, Routes } from "react-router";

import Welcome from "./features/welcome/welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Welcome />} index={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

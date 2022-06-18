import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "./utils/constants/routes";

import LoginPage from "./components/pages/Login";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.ROOT} element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "./utils/constants/routes";

import LoginPage from "./components/pages/Login";

import AnimationPage from "./components/pages/Animation/Animation";

import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.ROOT} element={<LoginPage />}></Route>
        </Routes>
        
        <Routes>
          <Route path={ROUTES.ROOT} element={<AnimationPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

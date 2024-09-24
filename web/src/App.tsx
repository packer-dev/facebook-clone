import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ModalProvider } from "@/contexts/ModalContext/ModalContext";
import routes from "@/routes/routes";

const App = () => {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </Router>
    </ModalProvider>
  );
};

export default App;

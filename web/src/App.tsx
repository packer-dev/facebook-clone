import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ModalProvider } from "@/contexts/ModalContext/ModalContext";
import routes from "@/routes/routes";

const showAllLinks = (routes) => {
  //
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route) => {
      return (
        <Route key={route.path} path={route.path} element={route.element} />
      );
    });
    return result;
  }
};
const App = (props) => {
  return (
    <ModalProvider>
      <Router>
        <Routes>{showAllLinks(routes)}</Routes>
      </Router>
    </ModalProvider>
  );
};

export default App;

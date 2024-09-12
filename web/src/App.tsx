import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext/ModalContext";
import routes from "./routes/routes";
import React from "react";

function showAllLinks(routes) {
  //

  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route key={route.path} path={route.path} element={route.element} />
      );
    });
    return result;
  }
}
function App(props) {
  return (
    <ModalProvider>
      <Router>
        <Routes>{showAllLinks(routes)}</Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;

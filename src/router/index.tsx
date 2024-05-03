import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PetPass from "../pages/Petpass";

const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="landing">
          <Route path="protect" element={<PetPass />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;

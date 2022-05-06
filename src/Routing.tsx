import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HEAD } from "./Components/index";
import { HOME } from "./Pages/index";

export const ROUTING = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HOME />} />
      </Routes>
    </Router>
  );
};

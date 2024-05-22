import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
export default function MainRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

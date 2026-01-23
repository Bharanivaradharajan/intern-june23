import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ResourcesPage from "./pages/ResourcesPage";
import DoctorsPage from "./pages/DoctorsPage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ResourcesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

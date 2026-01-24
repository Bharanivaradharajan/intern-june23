import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import ResourcesPage from "./pages/ResourcesPage";
import DoctorsPage from "./pages/DoctorsPage";
import ImplantsPage from "./pages/ImplantsPage";
import DevicesPage from "./pages/DevicesPage";
import OrthopedicMaterialsMarketPage from "./pages/OrthopedicMaterialsMarketPage";




function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/resources" />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/implants" element={<ImplantsPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/blog/orthopedic-materials-market" element={<OrthopedicMaterialsMarketPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

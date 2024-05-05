import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BusinessPage from "./pages/BusinessPage";
import EntertainmentPage from "./pages/EntertainmentPage";
import GeneralPage from "./pages/GeneralPage";
import HealthPage from "./pages/HealthPage";
import SciencePage from "./pages/SciencePage";
import SportsPage from "./pages/SportsPage";
import TechnologyPage from "./pages/TechnologyPage";
import NotFund from "./pages/NotFund";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="entertainment" element={<EntertainmentPage />} />
          <Route path="general" element={<GeneralPage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="science" element={<SciencePage />} />
          <Route path="sports" element={<SportsPage />} />
          <Route path="technology" element={<TechnologyPage />} />
        </Route>
        <Route path=" *" element={<NotFund />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

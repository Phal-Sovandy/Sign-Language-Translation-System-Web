import { Routes, Route } from "react-router-dom";
import App from "../App";
import DemoPage from "../pages/DemoPage";
import AboutPage from "../pages/AboutPage";
import DocumentationPage from "../pages/DocumentationPage";
import ChangelogPage from "../pages/ChangelogPage";
import ContactPage from "../pages/ContactPage";
import ScrollToTop from "../components/ScrollToTop";

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

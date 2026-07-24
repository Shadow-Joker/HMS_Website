import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { HMSBuilderPage } from './pages/HMSBuilderPage';
import { SpatialTwinPage } from './pages/SpatialTwinPage';
import { PatientFlowPage } from './pages/PatientFlowPage';
import { TelemetryPage } from './pages/TelemetryPage';
import { CompliancePage } from './pages/CompliancePage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <Router>
      <div className="min-h-[100dvh] bg-[#F3EFE3] text-[#1E2D26] selection:bg-[#769382] selection:text-[#F3EFE3] flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/builder" element={<HMSBuilderPage />} />
            <Route path="/spatial-twin" element={<SpatialTwinPage />} />
            <Route path="/patient-flow" element={<PatientFlowPage />} />
            <Route path="/telemetry" element={<TelemetryPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";
import PageLoader from "./components/Shared/PageLoader";

// Lazy load all sections for code splitting
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const TechStack = lazy(() => import("./components/TechStack/TechStack"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Shared/Footer"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-netflix-dark text-netflix-light">
        {/* ✅ Toast container (global) */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#141414",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />

        <Navbar />

        <main>
          <Suspense fallback={<PageLoader />}>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;

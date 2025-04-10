import "./index.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageTitleUpdater from "./scenes/TitleUpdater/TitleUpdater";
import { Analytics } from "@vercel/analytics/react";

// Global components
import TopBar from "./scenes/Global/Topbar";
import SideBar from "./scenes/Global/Sidebar";

// Lazy-loaded pages (Code-Splitting)
const Dashboard = lazy(() => import("./scenes/Dashboard"));
const Team = lazy(() => import("./scenes/team"));
const Invoices = lazy(() => import("./scenes/invoices"));
const Contacts = lazy(() => import("./scenes/contacts"));
const Calendar = lazy(() => import("./scenes/calendar"));
const Form = lazy(() => import("./scenes/form"));
const FAQ = lazy(() => import("./scenes/FAQ"));
const Pie = lazy(() => import("./scenes/pie"));
const Bar = lazy(() => import("./scenes/bar"));
const Line = lazy(() => import("./scenes/line"));
const Geography = lazy(() => import("./scenes/geography"));
import { hourglass } from "ldrs";
hourglass.register();

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <PageTitleUpdater />
        <Analytics />
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Suspense
              fallback={
                <div className="fixed inset-0 flex items-center justify-center">
                  <div className="loader">
                    <l-hourglass
                      size="40"
                      bg-opacity="0.1"
                      speed="1.75"
                      color="white"
                    ></l-hourglass>
                  </div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

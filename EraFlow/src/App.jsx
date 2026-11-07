import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";

import Leaders from "./pages/Leaders/Leaders";
import LeaderDetails from "./pages/Leaders/LeaderDetails";

// Culture & Lifestyle
import CultureLifestyle from "./pages/CultureLifestyle/CultureLifestyle";

// Admin Pages
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import LeadersList from "./pages/Admin/LeadersList";
import AddLeader from "./pages/Admin/AddLeader";
import EditLeader from "./pages/Admin/EditLeader";

import ProtectedRoute from "./routes/ProtectedRoute";

// Admin Culture
import CultureList from "./pages/Admin/Culture/CultureList";
import AddCulture from "./pages/Admin/Culture/AddCulture";
import EditCulture from "./pages/Admin/Culture/EditCulture";

// Game
import GuessHistoricalFigure from "./pages/Game/GuessHistoricalFigure";

// Other Public Pages
import Chatbot from "./pages/Chatbot/Chatbot";
import HeritagePage from "./pages/Heritage/HeritagePage";
import Battles from "./pages/Battle/Battles";
import BattleVideoPage from "./pages/Battle/BattleVideoPage";
import Explore from "./pages/Explore/Explore";


/* =====================================================
   PUBLIC LAYOUT
===================================================== */

const PublicLayout = () => {

  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}

      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/leaders"
          element={<Leaders />}
        />

        <Route
          path="/leaders/:id"
          element={<LeaderDetails />}
        />

        {/* Culture */}

        <Route
          path="/culture"
          element={<CultureLifestyle />}
        />

        {/* Heritage */}

        <Route
          path="/heritage"
          element={<HeritagePage />}
        />

        {/* Battles */}

        <Route
          path="/battles"
          element={<Battles />}
        />

        <Route
          path="/battles/video/:slug"
          element={<BattleVideoPage />}
        />

        {/* Game */}

        <Route
          path="/game"
          element={<GuessHistoricalFigure />}
        />

        {/* Chatbot */}

        <Route
          path="/chatbot"
          element={<Chatbot />}
        />

        {/* Explore */}

        <Route
          path="/explore"
          element={<Explore />}
        />


        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/admin/login"
          element={<Login />}
        />


        {/* ================= ADMIN DASHBOARD ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* ================= ADMIN LEADERS ================= */}

        <Route
          path="/admin/leaders"
          element={
            <ProtectedRoute>
              <LeadersList />
            </ProtectedRoute>
          }
        />


        {/* ================= ADD LEADER ================= */}

        <Route
          path="/admin/add-leader"
          element={
            <ProtectedRoute>
              <AddLeader />
            </ProtectedRoute>
          }
        />


        {/* ================= EDIT LEADER ================= */}

        <Route
          path="/admin/edit-leader/:id"
          element={
            <ProtectedRoute>
              <EditLeader />
            </ProtectedRoute>
          }
        />


        {/* ================= ADMIN CULTURE ================= */}

        <Route
          path="/admin/culture"
          element={
            <ProtectedRoute>
              <CultureList />
            </ProtectedRoute>
          }
        />


        {/* ================= ADD CULTURE ================= */}

        <Route
          path="/admin/culture/add"
          element={
            <ProtectedRoute>
              <AddCulture />
            </ProtectedRoute>
          }
        />


        {/* ================= EDIT CULTURE ================= */}

        <Route
          path="/admin/culture/edit/:id"
          element={
            <ProtectedRoute>
              <EditCulture />
            </ProtectedRoute>
          }
        />

      </Routes>

      {!isAdminPage && <Footer />}

    </>
  );
};


/* =====================================================
   APP
===================================================== */

function App() {

  return (
    <BrowserRouter>

      <PublicLayout />

    </BrowserRouter>
  );
}


export default App;


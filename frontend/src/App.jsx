import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Leaders from "./pages/Leaders/Leaders";
import LeaderDetails from "./pages/Leaders/LeaderDetails";

// import Heritage from "./pages/Heritage/Heritage";
// import Battles from "./pages/Battles/Battles";
// import Explore from "./pages/Explore/Explore";
// import Culture from "./pages/Culture/Culture";
// import ChatBot from "./pages/ChatBot/ChatBot";
// import Login from "./pages/Login/Login";
// import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/leaders" element={<Leaders />} />

        <Route path="/leaders/:id" element={<LeaderDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
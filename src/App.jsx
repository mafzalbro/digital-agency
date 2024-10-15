import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GraphicsDesignPage from "./pages/GraphicsDesignPage";
import VideoPage from "./pages/VideoPage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import MouseFollowCircle from "./components/MouseFollowCircle";

function App() {
  return (
    <Router>
      <MouseFollowCircle />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/graphics" element={<GraphicsDesignPage />} />
        <Route path="/videos" element={<VideoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

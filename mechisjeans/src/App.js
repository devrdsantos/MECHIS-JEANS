import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CarouselMain from "./components/CarouselMain";
import Footer from "./components/Footer";
// import Cards from "./components/Cards";
// import data from "./data";
import "./styles/card.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JeansPage from "./components/pages/JeansPage";
import ShortsPage from "./components/pages/ShortsPage";
import OfertasPage from "./components/pages/OfertasPage";
import CamperasPage from "./components/pages/CamperasPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CarouselMain />} />
          <Route path="/jeans" element={<JeansPage />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/camperas" element={<CamperasPage />} />
          <Route path="/ofertas" element={<OfertasPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

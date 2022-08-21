import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CarouselMain from "./components/CarouselMain";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import data from "./data";
import "./styles/card.css";
// import RegistroDeIngreso from './components/LogInForm';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselMain />
      <Cards info={data} />
      <Footer />
    </div>
  );
}

export default App;

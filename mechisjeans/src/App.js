import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CarouselMain from './components/CarouselMain';
import Footer from './components/Footer';
import Cards from './components/Cards';
import data  from './data';
import dataShort  from './dataShort';
import './styles/card.css';
import RegistroDeIngreso from './components/LogInForm';
import LogInForm from './components/LogInForm';
import LogUpForm from './components/LogUpForm';
import CardsShort from './components/CardsShort';

function App() {
  return (
    <div className="App">
        <Header />
        <CarouselMain />
        <Cards
        info = {data} />
        <CardsShort
        info = {dataShort} />
        <Footer />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CarouselMain from './components/CarouselMain';
import Footer from './components/Footer';
import Cards from './components/Cards';
import data  from './data';
import './styles/card.css'

function App() {
  return (
    <div className="App">
        <div className="flex div-header-especifico-prueba">
                <p> <b>3 cuotas sin interés con todas las tarjetas de crédito | Envio gratis a todo el país a partir de $40.000</b> </p>
            </div>
        <Header />
        <CarouselMain />
        <Cards 
        info = {data} />
        <Footer />
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemProductos from './components/ItemProductos/ItemProductos';

function App() {
  
  return (
    <div className="App">
      <NavBar/>

<h2>Proteinas</h2>
    <ItemProductos titulo="Proteina mass gainer" price="100.000" image={'prote1.jpg'}/>
    <ItemProductos titulo="Proteina limpia" price="200.000"/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemProductos from './components/ItemProductos/ItemProductos';
import ItemContenedor from './components/ItemContenedor/ItenContenedor';

function App() {
  
  return (
    <div className="App">
      <NavBar/>

<h2>Proteinas</h2>
<div className='main-container'>
        <ItemContenedor section="Productos en oferta"/>
      </div>
    {/* <Footer/> */}
    </div>
  );
}

export default App;

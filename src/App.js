import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemProductos from './components/ItemProductos/ItemProductos';
import ItemContenedor from './components/ItemContenedor/ItenContenedor';
import ItemListContainer from './components/ItemListContenedor/ItemListContenedor';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
      <NavBar/>

<h2>Proteinas</h2>
<div className='main-container'>
        <ItemListContainer section="Productos en oferta"/>
      </div >
    <Footer/> 
    </div>
  );
}

export default App;

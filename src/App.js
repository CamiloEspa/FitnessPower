import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContenedor/ItemListContenedor';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';
import Detail from './components/pages/Detail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  

  return (

    <BrowserRouter>
    
    <div className="App">
      <NavBar/>
{/*       <ItemDetailContainer/> */}
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/productos" element={<Products/>}/>
        <Route path="/productos/:id" element={<Detail/>}/>
{/*         <Route path="*" element={<h1>ERROR 404 - Pagina no disponible</h1>} />
 */}      </Routes>
          <Footer/> 
    </div>
    </BrowserRouter>
  );
  
}

export default App;

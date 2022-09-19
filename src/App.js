import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <header className="App-header">
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer /> } />
          <Route path='/cart' element={<Cart/>} />
      </Routes>
      </header>
    </BrowserRouter>
    </div>
  );
}

export default App;
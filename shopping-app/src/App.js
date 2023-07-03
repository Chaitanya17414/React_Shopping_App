
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import ProductList from './components/plp/ProductsList';
import ProductDetails from './components/pdp/ProductDetails';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" Component={Home} />
          <Route exact path="/plp" Component={ProductList} />
          <Route exact path="/productDetail/:id" Component={ProductDetails} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

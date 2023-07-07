
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import ProductList from './components/plp/ProductsList';
import ProductDetails from './components/pdp/ProductDetails';
import Login from './components/login /Login';
import Profile from './components/login /Profile';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" Component={Home} />
          <Route exact path="/plp" Component={ProductList} />
          <Route exact path="/productDetail/:id" Component={ProductDetails} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/profile" Component={Profile} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

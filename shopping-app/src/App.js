
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import ProductList from './components/plp/ProductsList';
import ProductDetails from './components/pdp/ProductDetails';
import Login from './components/login /Login';
import Profile from './components/login /Profile';
import Register from './components/login /Register';
import CategoryList from './components/categories/CategoryList';
import CartList from './components/cart/CartList';
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
          <Route exact path="/register" Component={Register} />
          <Route exact path="/categories" Component={CategoryList} />
          <Route exact path='/cart' Component={CartList} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

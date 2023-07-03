import logo from './logo.svg';
import './App.css';
import HeaBer from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div >
     <HeaBer name= "world"/>
     <Carousel />
     <Footer />
    </div>
  );
}

export default App;

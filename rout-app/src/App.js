import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import Taxsal from './page/taxsal';
function App() {
  return (
    //routing table
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="product/:id/:qty" element={<ProductDetail/>}/>
      <Route path="taxsal/:sal/:p" element={<Taxsal/>}/>
    </Routes>
  );
}


export default App;

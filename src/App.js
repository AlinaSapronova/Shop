import './App.css';
import Shop from './Shop/Shop';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import Home from './Shop/Home';
import AboutUs from './Shop/AboutUs';
import Contact from './Shop/Contact';

import icon from "./icon.png"
import Cart from './Components/Cart/Cart';


function App() {
  return (
    <Router>
    <nav>
      <Link to="/" className="navbar">Home</Link>
      <Link to="/shop" className="navbar">Shop</Link>
      <Link to="/aboutUs" className="navbar">About us</Link>
      <Link to="/contact" className="navbar">Contact</Link>
      <Link to="/cart" className="navbar"><img src={icon} alt="icon" width={40}/></Link>
    </nav>
    
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="shop" element={<Shop/>}></Route>
            <Route path="/aboutUs" element={<AboutUs/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            
          </Routes>
        </Router>
  );
}

export default App;

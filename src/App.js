import Main from "./components/main/main";
import Products from "./components/products/products";
import Contact from "./components/contact/contact";
import About from "./components/about/about";

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Main />}/>
        <Route path="/products" element= {<Products />}/>
        <Route path="/contact" element= {<Contact />}/>
        <Route path="/about" element= {<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
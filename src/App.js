import Main from "./components/main/main";
import Products from "./components/products/products";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

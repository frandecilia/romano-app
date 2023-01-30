import Main from "./components/main/main";
import Products from "./components/products/products";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { Route } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
    </div>
  );
}

export default App;

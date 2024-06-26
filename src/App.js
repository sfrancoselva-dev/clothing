import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";
import Home from "./pages/Home/Home.component";
import Shop from "./pages/Shop/Shop.component";
import Checkout from "./pages/Checkout/Checkout.component";
import Auth from "./pages/Auth/Auth.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

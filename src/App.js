import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";
import Home from "./pages/Home/Home.component";
import Shop from "./pages/Shop/Shop.component";
import Checkout from "./pages/Checkout/Checkout.component";
import Auth from "./pages/Auth/Auth.component";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  actionSignInSuccess,
  actionSigningOut,
} from "./store/user/user.action";
import { useDispatch } from "react-redux";

import "./App.css";
import Spinner from "./components/Spinner/Spinner.component";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(actionSignInSuccess(user));
      } else {
        dispatch(actionSigningOut());
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
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

      <Spinner />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./component/RootLayout";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Shop from "./component/page/Shop";
import Contacts from "./component/page/Contacts";
import Journal from "./component/page/Journal";
import SignUp from "./component/page/SignUp";
import Login from "./component/page/Login";
import ProductDetails from "./component/page/ProductDetails";
import Cart from "./component/page/Cart";
import ErrorPage from "./component/page/ErrorPage";
import ScrollToTop from "./component/layer/ScrollToTop";
import Checkout from "./component/page/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<Shop />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/journal" element={<Journal />}></Route>
      <Route path="/sign/up" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/product/details/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </>
  );
}

export default App;

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
import Navbar from "./component/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/product" element={<Shop/>} ></Route>
      <Route path="/contacts" element={<Contacts/>} ></Route>
      <Route path="/journal" element={<Journal/>} ></Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

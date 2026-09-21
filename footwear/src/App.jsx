import "./App.css";
import Carosual from "./components/homepage/Carosual";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/homepage/Cards";
import Nike from "./components/homepage/Nike";
import Adidas from "./components/homepage/Adidas";
import Jorden from "./components/homepage/Jorden";
import Puma from "./components/homepage/Puma";
import Trend from "./components/homepage/Trend";
import Skechers from "./components/homepage/Skechers";
import Shop from "./components/Shop";
import Footer from "./components/footer/Footer";
import About from "./components/About-us/About";
import Brands from "./components/Brands/Brands";
import Sale from "./components/Sale/Sale";
import New from "./components/New/New";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carosual />
              <Trend />
              <Cards />
            </>
          }
        />
        <Route
          path="/Nike"
          element={
            <>
              <Carosual />
              <Trend />
              <Nike />
            </>
          }
        />
        <Route
          path="/Adidas"
          element={
            <>
              <Carosual />
              <Trend />
              <Adidas />
            </>
          }
        />

        <Route
          path="/Jorden"
          element={
            <>
              <Carosual />
              <Trend />
              <Jorden />
            </>
          }
        />

        <Route
          path="/Puma"
          element={
            <>
              <Carosual />
              <Trend />
              <Puma />
            </>
          }
        />
        <Route
          path="/Skechers"
          element={
            <>
              <Carosual />
              <Trend />
              <Skechers />
            </>
          }
        />
        <Route
          path="/Shop"
          element={
            <>
              <Shop />
            </>
          }
        />
        <Route
          path="/About-us"
          element={
            <>
              <About />
            </>
          }
        />

        <Route
          path="/Brands"
          element={
            <>
              <Brands />
            </>
          }
        />
        <Route
          path="/Sale"
          element={
            <>
              <Sale />
            </>
          }
        />

        <Route
          path="/New"
          element={
            <>
              <New />
            </>
          }
        />

        <Route
          path="/Login"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route path="/product" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

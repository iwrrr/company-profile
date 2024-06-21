import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <MyFooter />
    </>
  );
}

export default App;

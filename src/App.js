import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

import "./components/item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./components/catalog";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1>Welcome to Jazar</h1>
      {/* <button className="btn btn-primary">Click Me!</button> */}

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, ProductDetail } from "./components";

import {Home, Layout} from "./containers";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
      <Router>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/viewcart" element={<Cart/>} />
                 <Route path="/about" element={<About/>} />
                 <Route path="/contact" element={<Contact/>} />
                <Route exact path="/product-detail/:productId" element={< ProductDetail/>}/>
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;

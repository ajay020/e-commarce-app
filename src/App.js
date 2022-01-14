import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, LoginModel, ProductDetail } from "./components";

import {Home, Layout} from "./containers";

function App() {
  return (
      <Router>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/viewcart" element={<Cart/>} />
                <Route exact path="/login" element={<LoginModel/>} />

                <Route exact path="/product-detail/:productId" element={< ProductDetail/>}/>
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;

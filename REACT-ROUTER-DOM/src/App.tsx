import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Contact from "./component/Contact";
import Order from "./component/Order";
import OrderSummary from "./component/OrderSummary";
import NoMatch from "./component/NoMatch";
import Products from "./component/Products";
import Feature from "./component/Feature";
import Users from "./component/Users";
import User from "./component/User";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" Component={Home} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/products" element={<Products />}>
          {/* <Route index element={<Feature />} /> */}
          <Route path="featured" element={<Feature />} />
        </Route>
        <Route path="/order" element={<Order />} />
        <Route path="/order-summary" element={<OrderSummary />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

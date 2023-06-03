import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import UsersList from "./Pages/UsersList/UsersList";
import SingleUser from "./Pages/SingleUser/SingleUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductsList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";
import SideBar from "./components/Sidebar/SideBar";
import Analytics from "./Pages/Analytics/Analytics";

// import {useStateContext} from './contexts/ContextProvider';

function App() {
  // const {activeMenu} = useStateContext();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/analytics" exact element={<Analytics/>}></Route>
            <Route path="/users" exact element={<UsersList />}></Route>
            <Route path="/user/:userId" exact element={<SingleUser />}></Route>
            <Route path="/newUser" exact element={<NewUser />}></Route>

            <Route path="/products" exact element={<ProductList/>}></Route>
            <Route path="/product/:productId" exact element={<Product/>}></Route>
            <Route path="/newproduct" exact element={<NewProduct/>}></Route>
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

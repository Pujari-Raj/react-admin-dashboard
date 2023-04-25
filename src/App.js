import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import "./App.css";
import Home from "./Pages/Home/Home";
import UsersList from "./Pages/UsersList/UsersList";
import SingleUser from "./Pages/SingleUser/SingleUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUser from "./Pages/NewUser/NewUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          {/* <Home/> */}
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/users" exact element={<UsersList />}></Route>
            <Route path="/user/:userId" exact element={<SingleUser />}></Route>
            <Route path="/newUser" exact element={<NewUser />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

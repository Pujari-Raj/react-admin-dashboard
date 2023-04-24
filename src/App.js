import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import './App.css';
import Home from "./Pages/Home/Home";
import UsersList from "./Pages/UsersList/UsersList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          {/* <Home/> */}
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route  path='/users' exact element={<UsersList />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

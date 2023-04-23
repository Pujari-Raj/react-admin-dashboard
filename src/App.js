import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;

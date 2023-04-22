import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <div className="container">
        <Sidebar/>
        <div className="other">other page</div>
      </div>
    </div>
  );
}

export default App;

import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nabar from "./components/Navbar.jsx";
import UserList from "./components/UserList.jsx";
import UserDetails from "./components/UserDetails.jsx";

function App() {

  return (
    <div className="App">
      <Nabar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users/" element={<UserList />}></Route>
        <Route path="/users/:id" element={<UserDetails />}></Route>
      </Routes>
      <h1>hello world</h1>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nabar from "./components/Navbar.jsx";
import UserList from "./components/UserList.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Nabar />
      <Routes>
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/users/"
          element={
            // <PrivateRoute>
              <UserList />
            // {/* </PrivateRoute> */}
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

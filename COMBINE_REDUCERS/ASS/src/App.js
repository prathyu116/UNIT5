import './App.css';
import Todo from './components/Todo';
import Login from './components/Login';
import {Routes, Route} from "react-router-dom"
import { PrivateComponent } from './components/PrivateComponent';

function App() {
  return (
    <div className='App'>

    <Routes>
      <Route path="/" element={
        <PrivateComponent>
          <Todo />
        </PrivateComponent>
      }></Route>

      <Route path="/login" element={<Login />}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;

import {Routes,Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/About/About';
import TodoList from './pages/Todos/todoList';

function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
      
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import ToDoForm from './ToDoForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Counter } from './pages/Counter';
import { Input } from './pages/Input';
import { List } from './pages/List';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/counter">Counter</Link><br />
        <Link to="/input">Input</Link><br />
        <Link to="/list">List</Link><br />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;

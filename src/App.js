import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>

    </div>
  );
}

export default App;

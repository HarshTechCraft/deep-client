import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Events from './components/Events';
import Admin from './components/Admin';
import EventInfo from './components/EventInfo';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/event-info" element={<EventInfo />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

    </div>
  );
}

export default App;

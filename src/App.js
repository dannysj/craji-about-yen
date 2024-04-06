import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GroomPage from './pages/groomPage/groom';
import BridePage from './pages/bridePage/bride';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GroomPage />} />
        <Route path="/bride" element={<BridePage />} /> {/* Add your new page route here */}
      </Routes>
    </Router>
  );
};


export default App;

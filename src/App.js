import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GroomPage from './pages/groomPage/groom';
import BridePage from './pages/bridePage/bride';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/craji-for-yen" element={<GroomPage />} />
        <Route path="/craji-for-yen/bride" element={<BridePage />} /> {/* Add your new page route here */}
      </Routes>
    </Router>
  );
};


export default App;

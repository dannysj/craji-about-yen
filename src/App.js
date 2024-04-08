import './App.css';
import GroomPage from './pages/groomPage/groom';
import BridePage from './pages/bridePage/bride';

import { useLocation } from 'react-router-dom';

function App() {

  let location = useLocation();
  let query = new URLSearchParams(location.search);
  let page = query.get('for'); // Assuming a URL parameter ?for=home or ?page=about

  let component;
  switch (page) {
    case 'bride':
      component = <BridePage />
      break;
    case 'groom':
    default:
      component = <GroomPage />
  }

  return component;
};


export default App;

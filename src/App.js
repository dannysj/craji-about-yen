import './App.css';
import config from './config/AssetPath';
import Introduction from './pages/introduction/Introduction';
import InvitationDetails from './pages/invitationDetails/InvitationDetails';
import RSVPDetails from './pages/rsvpDetails/RSVPDetails';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "CraJiForYen's Wedding Invitation"
  }, []);

  return (
    <>
      <style>{config.globalStyles()}</style>
      <div className="App">
        <Introduction />
        <InvitationDetails />
        <RSVPDetails />
      </div>
    </>
  );
};


export default App;

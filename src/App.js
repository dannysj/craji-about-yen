import './App.css';
import config from './config/AssetPath';
import Introduction from './pages/Introduction';
import InvitationDetails from './pages/InvitationDetails';
import RSVPDetails from './pages/RSVPDetails';

function App() {

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

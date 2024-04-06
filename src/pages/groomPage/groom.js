import './index.css';
import config from '../../config/AssetPath';
import Introduction from '../introduction/Introduction';
import InvitationDetails from '../invitationDetails/InvitationDetails';
import RSVPDetails from '../rsvpDetails/RSVPDetails';
import { useEffect } from 'react';

function GroomPage() {
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


export default GroomPage;
 
import './index.css';
import config from '../../config/AssetPath';
import Introduction from '../introduction/Introduction';
import InvitationDetails from '../invitationDetails/InvitationDetails';
import RSVPDetails from '../rsvpDetails/RSVPDetails';
import { useEffect } from 'react';

function BridePage() {
  useEffect(() => {
    document.title = "CraJiForYen's Wedding Invitation"
  }, []);

  return (
    <>
      <style>{config.globalStyles()}</style>
      <div className="App">
        <Introduction imageVar={config.IMAGES.KEY.FIRST_BRIDE}/>
        <InvitationDetails targetDateStr={config.CONFIGURATION.BRIDE.TARGET_DATE} imageVar={config.IMAGES.KEY.SECOND} venueName={config.CONFIGURATION.BRIDE.VENUE} venueAddress={config.CONFIGURATION.BRIDE.VENUE_ADDRESS}/>
        <RSVPDetails rsvpLink={config.CONFIGURATION.BRIDE.RSVP_LINK} imageVar={config.IMAGES.KEY.THIRD}/>
      </div>
    </>
  );
};


export default BridePage;
 
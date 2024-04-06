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
        <Introduction imageVar={config.IMAGES.KEY.MAIN}/>
        <InvitationDetails targetDateStr={config.CONFIGURATION.GROOM.TARGET_DATE} imageVar={config.IMAGES.KEY.SECOND_GROOM} venueName={config.CONFIGURATION.GROOM.VENUE} venueAddress={config.CONFIGURATION.GROOM.VENUE_ADDRESS}/>
        <RSVPDetails rsvpLink={config.CONFIGURATION.GROOM.RSVP_LINK} imageVar={config.IMAGES.KEY.THIRD_GROOM}/>
      </div>
    </>
  );
};


export default GroomPage;
 
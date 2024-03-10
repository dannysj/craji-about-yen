import React, {Component} from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';
import config from '../../config/AssetPath';
import RoundedButton from '../../components/button/RoundedButton';
import './RSVPDetails.css';

export default class RSVPDetails extends Component {
    render() {
        return (
            <BackgroundImage imageVar={config.IMAGES.KEY.THIRD} className='container rsvp-spacing darken-background'>
                <div className='rsvp-main-font'>我们期待您的见证</div>
                <div className='rsvp-eng-font'>WE LOOK FORWARD TO HAVING YOU</div>
                <RoundedButton onClick={() => {window.open(config.CONFIGURATION.RSVP_LINK, '_blank', 'noopener,noreferrer');}}><div className='rsvp-eng-font rsvp-font-large'>RSVP</div></RoundedButton>
            </BackgroundImage>
        );
    }
}
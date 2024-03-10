import React, {Component} from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';
import config from '../../config/AssetPath';
import CountdownTimer from '../../components/countdownTImer/CountdownTimer'
import './InvitationDetails.css'

export default class InvitationDetails extends Component {

    render() {
        const targetDate = new Date(config.CONFIGURATION.TARGET_DATE); // Set your target date and time
        return (
            <BackgroundImage imageVar={config.IMAGES.KEY.SECOND}  className='container'>
                <div className='top-spacing'>
                  <CountdownTimer targetDate={targetDate} language="chinese" />
                </div>
            </BackgroundImage>
        );
    }
}
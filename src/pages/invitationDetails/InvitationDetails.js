import React, {Component} from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';
import config from '../../config/AssetPath';
import CountdownTimer from '../../components/countdownTImer/CountdownTimer'
import './InvitationDetails.css'

export default class InvitationDetails extends Component {

    render() {
        const targetDate = new Date(config.CONFIGURATION.TARGET_DATE); // Set your target date and time
        const day = targetDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
        const dateStr = targetDate.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();
        const time = targetDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short' }).toUpperCase().replace("GMT", "UTC");

        return (
            <BackgroundImage imageVar={config.IMAGES.KEY.SECOND}  className='container'>
                <div className='top-spacing'>
                  <CountdownTimer targetDate={targetDate} language="chinese" />
                </div>
                <div className='invitation-details'>
                    <div className='text-details'>
                        <div>{dateStr}</div>
                        <div>{day}</div>
                        <div>{time}</div>
                    </div>
                    <div className='divider-title'></div>
                    <div className='text-details'>
                        <div className='title-text'>FUHOUSE RESTAURANT</div>
                        <div className='description-text'>41, Lorong Setia Sentral 1, 
                            <br/>
                            Pusat Perniagaan Setia Sentral, 
                            <br/>
                            14000 Bukit Mertajam, 
                            <br/>
                            Pulau Pinang, Malaysia
                            </div>
                    </div>
                </div>
                
            </BackgroundImage>
        );
    }
}
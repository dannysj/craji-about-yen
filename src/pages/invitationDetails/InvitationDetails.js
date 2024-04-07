import React, {Component} from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';
import CountdownTimer from '../../components/countdownTImer/CountdownTimer'
import './InvitationDetails.css'

export default class InvitationDetails extends Component {

    render() {
        const { targetDateStr, venueName, venueAddress, imageVar, overrideStyle } = this.props;
        const targetDate = new Date(targetDateStr); // Set your target date and time
        const day = targetDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
        const dateStr = targetDate.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();
        const time = targetDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short' }).toUpperCase().replace("GMT", "UTC");
        
        return (
            <BackgroundImage imageVar={imageVar}  className=' darken-background container'>
                <div className='top-spacing'>
                  <CountdownTimer targetDate={targetDate} language="chinese" />
                </div>
                <div className='invitation-details' style={overrideStyle}>
                    <div className='text-details'>
                        <div>{dateStr}</div>
                        <div>{day}</div>
                        <div>{time}</div>
                    </div>
                    <div className='divider-title'></div>
                    <div className='text-details'>
                        <div className='title-text'>{venueName}</div>
                        <div className='description-text'>
                            {venueAddress.map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}{index < venueAddress.length - 1 ? <br /> : null}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                
            </BackgroundImage>
        );
    }
}
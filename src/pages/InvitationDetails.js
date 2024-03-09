import React, {Component} from 'react';
import BackgroundImage from '../components/backgroundImage/BackgroundImage';
import config from '../config/AssetPath';


export default class InvitationDetails extends Component {
    render() {
        return (
            <BackgroundImage imageVar={config.IMAGES.KEY.SECOND}>

            </BackgroundImage>
        );
    }
}
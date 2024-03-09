import React, {Component} from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage';
import config from '../../config/AssetPath';
import './Introduction.css'; 
import '../../assets/common.css';

export default class Introduction extends Component {
    render() {
        const titleArrangementStyle = {
            padding: "5px 0px"
        }
        return (
            <BackgroundImage imageVar={config.IMAGES.KEY.MAIN} className='container'>
                <div className='section section1'>
                    <div className='main-tag-font sub-title-font-size white-font tag-spacing'># CRAJIFORYEN</div>
                </div>
                <div className='section section2'>
                    <div className='main-font sub-main-font-size white-font' style={titleArrangementStyle}>好久不见</div>
                    <div className='main-font main-font-size white-font' style={titleArrangementStyle}>我们婚礼见!</div>
                    <div className='main-eng-font sub-title-font-size white-font' style={titleArrangementStyle}>WELCOME TO OUR WEDDING</div>
                </div>
                <div className='vertical-sets'>
                    <div className='vertical-set left'>
                        <div className='name-title main-eng-font sub-title-font-size white-font'>THE BRIDE</div>
                        <div className="divider"></div>
                        <div className='reverse  name main-font sub-title-font-size white-font'>黄雪艳</div>
                        <div className='main-eng-font sub-title-font-size white-font'>WONG SHUET YEN</div>
                    </div>
                    <div className='vertical-set right'>
                        <div className='name-title main-eng-font sub-title-font-size white-font'>THE GROOM</div>
                        <div className="divider"></div>
                        <div className='reverse name main-font sub-title-font-size white-font'>周世济</div>
                        <div className='main-eng-font sub-title-font-size white-font'>CHEW SHI JI</div>
                    </div>
                </div>
            </BackgroundImage>
        );
    }
}
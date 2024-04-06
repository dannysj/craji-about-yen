import backgroundMain from '../assets/images/main.jpeg';
import backgroundSecond from '../assets/images/second.jpeg';
import backgroundThird from '../assets/images/third.jpeg';
import backgroundThirdGroom from '../assets/images/third-groom.jpeg';
import backgroundFirstBride from '../assets/images/first-bride.jpeg';
import backgroundSecondGroom from '../assets/images/second-groom.jpeg';
import fontCambo from '../assets/font/cambo.ttf';
import fontCambay from '../assets/font/cambay.ttf';
import fontMoYangZhuanJi from '../assets/font/moyangzhuanji.ttf';
import fontYingbikaishu from '../assets/font/yingbikaishu.ttf';

const CONFIGURATION = {
    BRIDE: {
        TARGET_DATE: '2024-12-21T19:00:00+08:00',
        RSVP_LINK: "https://forms.gle/A3WNwMuMHH7RSyxn9",
        VENUE: "PUSING PUBLIC Restaurant",
        VENUE_ADDRESS: [
            "59, 61, 57, 63 & 65, JALAN VEERASAMY,", 
            "KAMPUNG JAWA,",
            "30300 IPOH,",
            "PERAK, MALAYSIA"
        ]
    },
    GROOM: {
        TARGET_DATE: '2024-12-28T19:00:00+08:00',
        RSVP_LINK: "https://forms.gle/A3WNwMuMHH7RSyxn9",
        VENUE: "FUHOUSE RESTAURANT",
        VENUE_ADDRESS: [
            "41, Lorong Setia Sentral 1,",
            "Pusat Perniagaan Setia Sentral,",
            "14000 Bukit Mertajam,",
            "Pulau Pinang, Malaysia"
        ]
    }
};

const IMAGES = {
    BACKGROUND: {
        MAIN: backgroundMain,
        FIRST_BRIDE: backgroundFirstBride,
        SECOND: backgroundSecond,
        SECOND_GROOM: backgroundSecondGroom,
        THIRD: backgroundThird,
        THIRD_GROOM: backgroundThirdGroom,
    },
    KEY: {
        MAIN: "background-main",
        FIRST_BRIDE: "background-first-bride",
        SECOND: "background-second",
        SECOND_GROOM: "background-second-groom",
        THIRD: "background-third",
        THIRD_GROOM: "background-third-groom",
    }
  };
  
  const FONTS = {
    Cambo: fontCambo,
    Cambay: fontCambay,
    MoYangZhuanJi: fontMoYangZhuanJi,
    Yingbikaishu: fontYingbikaishu
  };
  
  // Define globalStyles as a function to ensure variables are initialized
  const globalStyles = () => `
    @font-face {
      font-family: 'Cambo';
      src: url('${FONTS.Cambo}') format('truetype');
    }
    @font-face {
        font-family: 'Cambay';
        src: url('${FONTS.Cambay}') format('truetype');
    }
      @font-face {
        font-family: 'MoYangZhuanJi';
        src: url('${FONTS.MoYangZhuanJi}') format('truetype');
      }
      @font-face {
        font-family: 'Yingbikaishu';
        src: url('${FONTS.Yingbikaishu}') format('truetype');
      }  
    :root {
      --${IMAGES.KEY.MAIN}: url('${IMAGES.BACKGROUND.MAIN}');
      --${IMAGES.KEY.FIRST_BRIDE}: url('${IMAGES.BACKGROUND.FIRST_BRIDE}');
      --${IMAGES.KEY.SECOND}: url('${IMAGES.BACKGROUND.SECOND}');
      --${IMAGES.KEY.SECOND_GROOM}: url('${IMAGES.BACKGROUND.SECOND_GROOM}');
      --${IMAGES.KEY.THIRD}: url('${IMAGES.BACKGROUND.THIRD}');
      --${IMAGES.KEY.THIRD_GROOM}: url('${IMAGES.BACKGROUND.THIRD_GROOM}');
    }
  `;
  
  const config = {
    CONFIGURATION,
    IMAGES,
    FONTS,
    globalStyles, // Note: This is now a function
  };
  
  export default config;


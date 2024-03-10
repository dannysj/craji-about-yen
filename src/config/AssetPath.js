import backgroundMain from '../assets/images/main.jpg';
import backgroundSecond from '../assets/images/second.jpg';
import backgroundThird from '../assets/images/third.jpg';
import fontCambo from '../assets/font/cambo.ttf';
import fontCambay from '../assets/font/cambay.ttf';
import fontMoYangZhuanJi from '../assets/font/moyangzhuanji.ttf';
import fontYingbikaishu from '../assets/font/yingbikaishu.ttf';

const CONFIGURATION = {
    TARGET_DATE: '2024-12-28T19:00:00+08:00',
    RSVP_LINK: "https://forms.gle/A3WNwMuMHH7RSyxn9"
};

const IMAGES = {
    BACKGROUND: {
        MAIN: backgroundMain,
        SECOND: backgroundSecond,
        THIRD: backgroundThird
    },
    KEY: {
        MAIN: "background-main",
        SECOND: "background-second",
        THIRD: "background-third"
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
      --${IMAGES.KEY.SECOND}: url('${IMAGES.BACKGROUND.SECOND}');
      --${IMAGES.KEY.THIRD}: url('${IMAGES.BACKGROUND.THIRD}');
    }
  `;
  
  const config = {
    CONFIGURATION,
    IMAGES,
    FONTS,
    globalStyles, // Note: This is now a function
  };
  
  export default config;


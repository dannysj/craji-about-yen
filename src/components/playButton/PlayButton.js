import React, { useEffect } from 'react';
import LottiePlayButton from './LottiePlayButton'; 

const PlayButton = (audioUrl) => {
  useEffect(() => {
    // Initialize the LottiePlayButton when the component mounts
    const playButton = new LottiePlayButton('play-button-container', audioUrl);

    const playAudioOnce = () => {
        playButton.togglePlay();
  
        // Event listeners are removed by the 'once' option
      };
  
      document.addEventListener('touchstart', playAudioOnce, {once: true});
      document.addEventListener('click', playAudioOnce, {once: true});
      document.addEventListener('scroll', playAudioOnce, {once: true});
    return () => {
      // Optional: clean up when the component unmounts
      playButton.animationInstance.destroy();
      document.removeEventListener('touchstart', playAudioOnce);
      document.removeEventListener('click', playAudioOnce);
      document.removeEventListener('scroll', playAudioOnce);
    };
  }, []);

  return (
    <div id="play-button-container" style={{width: '80px', height: '80px', position: 'fixed', top: '1em', right: '1em', zIndex: '3'}}>
      {/* Lottie animation will be inserted here */}
    </div>
  );
};

export default PlayButton;
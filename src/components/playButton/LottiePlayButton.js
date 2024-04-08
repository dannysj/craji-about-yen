import lottie from 'lottie-web';
import animationData from '../../assets/playbutton.json'

import song2 from '../../assets/music/penangsong.mp3';
import song1 from '../../assets/music/ipohsong.mp3';

class LottiePlayButton {
  constructor(elementId, audioChoice) {
    this.loopFrames = { from: 54, to: 63 };
    this.playButtonElement = document.getElementById(elementId);
    this.isPlaying = false; // Tracks the play state
    this.shouldLoop = false; 
    this.animationInstance = null; // Will hold the Lottie animation instance

    let songUsed = song1;
    console.log(audioChoice)
    if (audioChoice === "penang") {
      songUsed = song2;
    } else if (audioChoice === "ipoh") {
      songUsed = song1;
    }

    // Initialize the animation
    this.initAnimation(elementId, animationData);

    this.audio = new Audio(songUsed); // Initialize the audio
  }

  playAudio = () => {
    this.audio.loop = true; // Loop the audio
    this.audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
      // Handle failed playback, e.g., due to browser autoplay policy
      // You might want to show a UI element prompting the user to start the playback manually
    });
  }

  initAnimation(elementId, animationData) {
    this.animationInstance = lottie.loadAnimation({
      container: document.getElementById(elementId), // The DOM element
      renderer: 'svg',
      loop: false, // Disable default looping
      autoplay: false,
      animationData: animationData,
    });

    // Add the click event listener to toggle playback
    this.animationInstance.addEventListener('DOMLoaded', () => {
      document.getElementById(elementId).addEventListener('click', () => {
        this.togglePlay();
      });
    });
  }

  togglePlay() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.shouldLoop = true;
      this.playAudio();
      this.playAnimation();
    } else {
      this.isPlaying = false;
      this.shouldLoop = false;
      this.animationInstance.stop(); // Or .pause() if you want to resume from the same spot later
      this.audio.pause();
      this.audio.currentTime = 0; // Reset audio to start
    }
  }

  playAnimation() {
    this.animationInstance.goToAndPlay(this.loopFrames.from, true);

    // Add an 'enterFrame' event listener to loop manually
    this.animationInstance.addEventListener('enterFrame', () => {
      if (this.isPlaying && this.animationInstance.currentFrame >= this.loopFrames.to) {
        this.animationInstance.goToAndPlay(this.loopFrames.from, true);
      }
    });
  }

  stopAnimation() {
    this.isPlaying = false;
    this.shouldLoop = false; // Disable looping, but let the animation continue playing
    // No need to explicitly call any method to continue playing to the end, 
    // as removing the loop control will allow the animation to proceed naturally.
  }
}


export default LottiePlayButton;
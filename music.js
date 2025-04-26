window.addEventListener("load", () => {
    const music = document.getElementById("bg-music");
    const unmuteButton = document.getElementById("unmuteButton");

    // Create an AudioContext for controlling audio playback
    const context = new (window.AudioContext || window.webkitAudioContext)();

    // Ensure that the unmute button is visible, and music is initially muted
    unmuteButton.style.display = "block";
    music.muted = true;  // Start the music as muted

    // Handle unmute button click to start the audio playback
    unmuteButton.addEventListener("click", () => {
        context.resume().then(() => {
            console.log("AudioContext resumed and playback started");

            // Unmute and play the music
            music.muted = false;
            music.volume = 0.8; // Set the volume level
            music.play().catch((e) => {
                console.error("Autoplay still blocked:", e);
            });

            // Hide the unmute button after it's clicked
            unmuteButton.style.display = "none";
        });
    });

    // Set initial volume for the music (it will be adjusted on unmute)
    music.volume = 0.8;
});


window.addEventListener("load", () => {
    const bells = document.getElementById("bg-bells");
    const unmuteButton = document.getElementById("unmuteButton");
  
    unmuteButton.addEventListener("click", () => {
      bells.muted = false;
      bells.volume = 0.6;
      bells.play();
    });
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("chamberTrigger");
    const buttonContainer = document.getElementById("chamberButtonContainer");
    const button = document.getElementById("chamberButton");
    const sound = document.getElementById("chamberSound");
  
    let triggered = false;
  
    trigger.addEventListener("mouseenter", () => {
      if (!triggered) {
        triggered = true;
        buttonContainer.style.display = "block";
      }
    });
  
    button.addEventListener("click", () => {
      sound.currentTime = 0;
      sound.volume = 0.6;
      sound.play();
    });
  });
  

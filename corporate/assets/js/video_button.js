var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa fa-play-circle"></i><br/>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa fa-pause-circle"></i><br/>';
  }
}
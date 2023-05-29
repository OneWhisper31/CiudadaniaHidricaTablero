var onSound = false;
const audioPlayer = document.getElementById('audioPlayer');

function OnSound(_typeOfSound = 0) {
  onSound = !onSound
  typeOfSound=_typeOfSound;

  var s = document.getElementById("sound");
  
  if(onSound)
    s.style = "background-color: #01497C; display: inline;"
  else
    s.style = "background-color: rgba(0, 0, 0, 0.6); display: inline;"
}

window.addEventListener("arjs-nft-loaded", (event) => {
  var d = document.getElementById("mybutton");
  d.style = "display: inline;"

  var s = document.getElementById("sound");
  s.style = "display: inline;"

  // document.appendChild(d + s)
});

window.addEventListener("markerFound", (event) => {
  if (onSound) {
    audioPlayer.play();
  }
});
window.addEventListener("markerLost", (event) => {
    audioPlayer.pause();
});
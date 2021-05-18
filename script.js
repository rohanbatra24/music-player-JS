let rootDirEntry = window.showOpenFilePicker();

const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music

const songs = [
  { name: "song1", displayName: "Electric chill", artist: "jacinto" },
  { name: "song2", displayName: "Seven nation chill", artist: "jacinto" },
  { name: "song3", displayName: "ddd chill", artist: "jacinto" },
];

// Check if playing
let isPlaying = false;

console.log(`music`, music);

const playSong = (params) => {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
};

const pauseSong = (params) => {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");

  music.pause();
};

// Event listeners
//play or pause
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

//update DOM

const loadSong = (song) => {};

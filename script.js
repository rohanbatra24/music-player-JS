const image = document.querySelector("img");
const title = document.querySelectorAll("title");
const artist = document.querySelectorAll("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music

const songs = [
  {
    name: "song1",
    displayName: "Electric chill",
    artist: "jacinto",
    image: "img1",
  },
  {
    name: "song2",
    displayName: "Seven nation chill",
    artist: "sdddd",
    image: "img2",
  },
  {
    name: "song3",
    displayName: "ddd chill",
    artist: "jacintaaaagabfdo",
    image: "img3",
  },
  {
    name: "song4",
    displayName: "dssssssssl",
    artist: "jacfadgsdhfjinto",
    image: "img4",
  },
];

// Check if playing
let isPlaying = false;

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

const loadSong = (song) => {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.image}.jpg`;
};

// CUrrent Song
let songIndex = 0;

const nextSong = (params) => {
  loadSong(songs[songIndex++]);
  playSong();

  console.log(`songIndex`, songIndex);
  console.log(`songs length`, songs.length);

  console.log(songIndex >= songs.length);

  if (songIndex >= songs.length) {
    console.log("in if");
    nextBtn.setAttribute("disabled", true);
    songIndex--;
  }
};

const prevSong = (params) => {
  loadSong(songs[songIndex--]);
  playSong();
};

// On load - select first song
loadSong(songs[songIndex]);

// Event listeners

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

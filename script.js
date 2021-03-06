const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationTimeEl = document.getElementById("duration");
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
  if (songIndex >= songs.length) {
    nextBtn.setAttribute("disabled", true);
    songIndex = 0;
  }
  loadSong(songs[songIndex++]);
  playSong();
};

const prevSong = (params) => {
  if (songIndex <= 0) {
    nextBtn.setAttribute("disabled", true);
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex--]);
  playSong();
};

// On load - select first song
loadSong(songs[songIndex]);

// Update progress bar and time
const updateProgressBar = (e) => {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + "%";
    // calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    const durationText = `${durationMinutes}:${durationSeconds}`;

    // delay switching duration element to avoid NaN
    if (durationSeconds) {
      durationTimeEl.textContent = durationText;
    }
    // calculate display for current time
    const currentTimeMinutes = Math.floor(currentTime / 60);
    let currentTimeSeconds = Math.floor(currentTime % 60);
    if (currentTimeSeconds < 10) {
      currentTimeSeconds = `0${currentTimeSeconds}`;
    }
    currentTimeEl.textContent = `${currentTimeMinutes}:${currentTimeSeconds}`;
  }
};

// set progress bar
const setProgressBar = (e) => {};

// Event listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

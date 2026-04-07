const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const song = document.getElementById("audio");
const play = document.getElementById("play");
const currentProgress = document.getElementById("current-progress");
const progressCounter = document.getElementById("progress-counter");
const currentProgressCounter = document.getElementById("current-progress-counter");
const progressBar = document.getElementById("progress-bar");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

songName.innerText = "In Da Club";
artistName.innerText = "50 Cent";
currentProgress.style.width = "0%";

let isPlaying = false;

function playSong(){
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if (isPlaying === true) {
        pauseSong();
    }
    else{
        playSong();
    }
}

play.addEventListener('click', playPauseDecider);

song.addEventListener('timeupdate',() => {
    const percentage = (song.currentTime / song.duration ) * 100;
    currentProgress.style.width = percentage + "%";
})

progressBar.addEventListener('click', (e) => {

    const larguraTotal = progressBar.clientWidth;

    const cliqueX = e.offsetX;

    const duracaoTotal = song.duration;

    const novoTempo = (cliqueX / larguraTotal) * duracaoTotal;

    song.currentTime = novoTempo;
});

song.addEventListener('loadedmetadata', () => {
    progressCounter.textContent = Math.floor(song.duration) + "s";
});

song.addEventListener('timeupdate', () => {
    currentProgressCounter.textContent = Math.floor(song.currentTime) + "s";
});

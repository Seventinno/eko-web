const audioPlayer = document.getElementById("audio-player");
const audio = document.getElementById("audio-element");

const playBtn = document.getElementById("play-btn");
const progressBar = document.getElementById("progress-bar");

const cover = document.getElementById("player-cover");
const title = document.getElementById("player-title");
const artist = document.getElementById("player-artist");

const currentTimeEl = document.getElementById("current-time");
const totalTimeEl = document.getElementById("total-time");


// -------- FUNCIÓN PRINCIPAL PARA REPRODUCIR -------- //
function playSong(data) {
    audioPlayer.classList.remove("hidden");

    audio.src = data.audio;
    cover.src = data.cover;
    title.textContent = data.title;
    artist.textContent = data.artist;

    audio.play();
    playBtn.textContent = "⏸";
}


// -------- CONTROL DEL PLAY/PAUSE -------- //
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});


// -------- ACTUALIZAR TIEMPOS -------- //
audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;

    currentTimeEl.textContent = formatTime(audio.currentTime);
    totalTimeEl.textContent = formatTime(audio.duration);
});


// -------- CONTROL MANUAL DE LA BARRA -------- //
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});


// -------- FORMATEAR MINUTOS/SEGUNDOS -------- //
function formatTime(seconds) {
    if (!seconds) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
}

document.querySelectorAll(".card-musica").forEach(card => {
    card.addEventListener("click", () => {
        playSong({
            title: card.dataset.title,
            artist: card.dataset.artist,
            cover: card.dataset.cover,
            audio: card.dataset.audio
        });
    });
});

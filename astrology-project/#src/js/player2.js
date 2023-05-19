let bar = document.querySelector(".bar");
let control = document.getElementById("control");
var sound = new Howl({
    src: ["sound.mp3"]
});

function init(audio) {
    sound = new Howl({
        src: [audio],
        volume: .5,
        html5: true,
        onplay: function () {
            requestAnimationFrame(step)
        },
        onseek: function () { },
        onend: function () {
            controlPause();
            let cardPlayer = document.querySelector(".card-player.active");
            cardPlayer.querySelector(".post__pause").style.visibility = "hidden";
            cardPlayer.querySelector(".post__play").style.visibility = "visible";
        }
    })
}
document.querySelectorAll(".card-player").forEach(item => {
    item.addEventListener("click", event => {
        document.querySelectorAll(".post__pause").forEach(item => {
            item.style.visibility = "hidden"
        });
        document.querySelectorAll(".post__play").forEach(item => {
            item.style.visibility = "hidden"
        });
        if (sound.playing() && !item.classList.contains("active")) {
            sound.pause()
        }
        document.querySelectorAll(".card-player").forEach(item => {
            item.classList.remove("active")
        });
        let pause = item.querySelector(".post__pause");
        let play = item.querySelector(".post__play");
        if (sound.playing()) {
            sound.pause();
            pause.style.visibility = "hidden";
            play.style.visibility = "visible";
            controlPause()
        } else {
            let audio = 'sound.mp3';
            // let audio = item.dataset.file;
            init(audio);
            sound.play();
            play.style.visibility = "hidden";
            pause.style.visibility = "visible";
            bar.style.visibility = "visible";
            item.classList.add("active");
            controlPlay()
        }
        localStorage.setItem("current-track", item.dataset.id);
        let cardName = item.querySelector(".post__title").textContent;
        let mainTitle = document.querySelector(".posts__title").textContent;
        let barText = document.querySelector(".bar__text");
        let barTitle = document.querySelector(".bar__title");
        barTitle.innerHTML = mainTitle;
        barText.innerHTML = cardName;
    })
});
control.addEventListener("click", event => {
    let currentTrack = localStorage.getItem("current-track");
    let currentCard = document.querySelector(`[data-id="${currentTrack}"]`);
    let play = currentCard.querySelector(".post__play");
    let pause = currentCard.querySelector(".post__pause");
    if (sound.playing()) {
        sound.pause();
        pause.style.visibility = "hidden";
        play.style.visibility = "visible";
        controlPause()
    } else {
        sound.play();
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        controlPlay()
    }
});
let slider = document.getElementById("bar__volume");
slider.oninput = function () {
    let volume = this.value / 100;
    sound.volume(volume)
};
document.getElementById("progress").addEventListener("click", function (e) {
    var bcr = this.getBoundingClientRect();
    var percentage = e.clientX / bcr.width * 100;
    var pseek = sound.duration() * percentage / 100;
    sound.pause();
    sound.seek(pseek);
    sound.play();
});

function controlPause() {
    control.classList.remove("fa-pause");
    control.classList.add("fa-play");
}

function controlPlay() {
    control.classList.remove("fa-play");
    control.classList.add("fa-pause");
}

function step() {
    var seek = sound.seek() || 0;
    let progress = document.querySelector(".bar__length");
    document.querySelector(".bar__time").innerHTML = formatTime(Math.round(seek));
    progress.style.width = (seek / sound.duration() * 100 || 0) + "%";
    if (sound.playing()) {
        requestAnimationFrame(step)
    }
}

function formatTime(secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = secs - minutes * 60 || 0;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}
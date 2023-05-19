function step() {
    var seek = sound.seek() || 0;
    let progress = document.querySelector('.bar__length');
    progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

    if (sound.playing()) {
        requestAnimationFrame(step);
    }
}

let sound = new Howl({
    src: ['sound.mp3'],
    volume: 0.5,
    onplay: function () {
        console.log(Math.round(sound.duration()));
        requestAnimationFrame(step);
    },
    onseek: function () {
        console.log(sound.seek());
    }
});
console.log(sound);

let bar = document.querySelector('.bar');
let control = document.getElementById('control');


document.querySelectorAll('.card-player').forEach(item => {

    item.addEventListener('click', event => {
        document.querySelectorAll('.post__pause').forEach(item => {
            item.style.visibility = 'hidden';
        });

        document.querySelectorAll('.post__play').forEach(item => {
            item.style.visibility = 'hidden';
        });

        document.querySelectorAll('.card-player').forEach(item => {
            item.classList.remove('active');
        });


        let pause = item.querySelector('.post__pause');
        let play = item.querySelector('.post__play');

        if (sound.playing()) {
            sound.pause();
            console.log('567');
            pause.style.visibility = 'hidden';
            play.style.visibility = 'visible';
            control.classList.remove('fa-pause');
            control.classList.add('fa-play');
        }
        else {
            sound.play();
            console.log('123');
            play.style.visibility = 'hidden';
            pause.style.visibility = 'visible';
            bar.style.visibility = 'visible';
            control.classList.remove('fa-play');
            control.classList.add('fa-pause');
            item.classList.add('active');
        }

        localStorage.setItem('current-track', item.dataset.id);
        let cardName = item.querySelector('.post__title').textContent;
        let barText = document.querySelector('.bar__text');
        barText.innerHTML = cardName;

    })
});


control.addEventListener('click', event => {
    localStorage.getItem('current-track');
    let currntTrack = localStorage.getItem('current-track');
    let currentCard = document.querySelector(`[data-id="${currntTrack}"]`);
    let play = currentCard.querySelector('.post__play');
    let pause = currentCard.querySelector('.post__pause');

    if (sound.playing()) {
        sound.pause();
        pause.style.visibility = 'hidden';
        play.style.visibility = 'visible';
        control.classList.remove('fa-pause');
        control.classList.add('fa-play');
        console.log('pause');
    }
    else {
        sound.play();
        play.style.visibility = 'hidden';
        pause.style.visibility = 'visible';
        control.classList.remove('fa-play');
        control.classList.add('fa-pause');
        console.log('play');
    }
});

let slider = document.getElementById("myRange");
slider.oninput = function () {
    let volume = this.value / 100;
    sound.volume(volume);
}

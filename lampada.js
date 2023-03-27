const button = document.getElementById('button');
const lamp = document.getElementById('lamp');
const fxOn = document.getElementById('switch-fx-on');
const fxOff = document.getElementById('switch-fx-off');
let state = false;

const buttonOn = () => {
    button.src = './assets/turnon.png';
    lamp.src = './assets/lampada-on.png';
    state = true;
    fxOn.play();
}

const buttonOff = () => {
    button.src = './assets/turnoff.png';
    lamp.src = './assets/lampada-off.png';
    state = false;
    fxOff.play();
}

button.addEventListener('click', () => {
    if (state) {
        buttonOff();
    } else {
        buttonOn();
    }
});

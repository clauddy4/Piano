const C4 = new Audio("sounds/C4.mp3");
const Db4 = new Audio("sounds/Db4.mp3");
const D4 = new Audio("sounds/D4.mp3");
const Eb4 = new Audio("sounds/Eb4.mp3");
const E4 = new Audio("sounds/E4.mp3");
const F4 = new Audio("sounds/F4.mp3");
const Gb4 = new Audio("sounds/Gb4.mp3");
const G4 = new Audio("sounds/G4.mp3");
const Ab4 = new Audio("sounds/Ab4.mp3");
const A4 = new Audio("sounds/A4.mp3");
const Bb4 = new Audio("sounds/Bb4.mp3");
const B4 = new Audio("sounds/B4.mp3");
const C5 = new Audio("sounds/C5.mp3");
const Db5 = new Audio("sounds/Db5.mp3");
const D5 = new Audio("sounds/D5.mp3");
const Eb5 = new Audio("sounds/Eb5.mp3");
const E5 = new Audio("sounds/E5.mp3");

const C4key = document.querySelector(".C4");
const Db4key = document.querySelector(".Db4");
const D4key = document.querySelector(".D4");
const Eb4key = document.querySelector(".Eb4");
const E4key = document.querySelector(".E4");
const F4key = document.querySelector(".F4");
const Gb4key = document.querySelector(".Gb4");
const G4key = document.querySelector(".G4");
const Ab4key = document.querySelector(".Ab4");
const A4key = document.querySelector(".A4");
const Bb4key = document.querySelector(".Bb4");
const B4key = document.querySelector(".B4");
const C5key = document.querySelector(".C5");
const Db5key = document.querySelector(".Db5");
const D5key = document.querySelector(".Db5");
const Eb5key = document.querySelector(".Eb5");
const E5key = document.querySelector(".E5");

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400)
    setTimeout(() => (clone.volume = 0.6), 800)
    setTimeout(() => (clone.volume = 0.4), 1200)
    setTimeout(() => (clone.volume = 0.2), 1600)
    setTimeout(() => (clone.volume = 0), 2000)
};

function playKey(note, key) {
    playSound(note);
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 200)
}

C4key.addEventListener("click", function () {playKey(C4, C4key)}, true);
Db4key.addEventListener("click", function () {playKey(Db4, Db4key)}, true);
D4key.addEventListener("click", function () {playKey(D4, D4key)}, true);
Eb4key.addEventListener("click", function () {playKey(Eb4, Eb4key)}, true);
E4key.addEventListener("click", function () {playKey(E4, E4key)}, true);
F4key.addEventListener("click", function () {playKey(F4, F4key)}, true);
Gb4key.addEventListener("click", function () {playKey(Gb4, Gb4key)}, true);
G4key.addEventListener("click", function () {playKey(G4, G4key)}, true);
Ab4key.addEventListener("click", function () {playKey(Ab4, Ab4key)}, true);
A4key.addEventListener("click", function () {playKey(A4, A4key)}, true);
Bb4key.addEventListener("click", function () {playKey(Bb4, Bb4key)}, true);
B4key.addEventListener("click", function () {playKey(B4, B4key)}, true);
C5key.addEventListener("click", function () {playKey(C5, C5key)}, true);
Db5key.addEventListener("click", function () {playKey(Db5, Db5key)}, true);
D5key.addEventListener("click", function () {playKey(D5, D5key)}, true);
Eb5key.addEventListener("click", function () {playKey(Eb5, Eb5key)}, true);
E5key.addEventListener("click", function () {playKey(E5, E5key)}, true);

window.addEventListener("keydown", ({ keyCode }) => {
    // Press Q
    if (keyCode === 81) return playKey(C4, C4key);
    // Press 2
    if (keyCode === 50) return playKey(Db4, Db4key);
    // Press W
    if (keyCode === 87) return playKey(D4, D4key);
    // Press 3
    if (keyCode === 51) return playKey(Eb4, Eb4key);
    // Press E
    if (keyCode === 69) return playKey(E4, E4key);
    // Press R
    if (keyCode === 82) return playKey(F4, F4key);
    // Press 5
    if (keyCode === 53) return playKey(Gb4, Gb4key);
    // Press T
    if (keyCode === 84) return playKey(G4, G4key);
    // Press 6
    if (keyCode === 54) return playKey(Ab4, Ab4key);
    // Press Y
    if (keyCode === 89) return playKey(A4, A4key);
    // Press 7
    if (keyCode === 55) return playKey(Bb4, Bb4key);
    // Press U
    if (keyCode === 85) return playKey(B4, B4key);
    // Press I
    if (keyCode === 73) return playKey(C5, C5key);
    // Press 9
    if (keyCode === 57) return playKey(Db5, Db5key);
    // Press O
    if (keyCode === 79) return playKey(D5, D5key);
    // Press 0
    if (keyCode === 48) return playKey(Eb5, Eb5key);
    // Press P
    if (keyCode === 80) return playKey(E5, E5key);
});

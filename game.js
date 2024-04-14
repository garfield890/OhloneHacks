let player1 = document.querySelector('#p1');
var rect = element.getBoundingClientRect();
let x = rect.left;
let speed = 10;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

document.addEventListener('keydown', (e) => {
    if (e.keycode == 37) {
        x -= speed;
        player1.style.left = x + 'px';
        player1.style.transform = 'rotate(270deg)';
    } else if (e.keycode == 39) {
        x += speed;
        player1.style.left = x + 'px';
        player1.style.transform = 'rotate(270deg)';
    }
});
let home = document.getElementById('home');
let guest = document.getElementById('guest');

let scoreH = 0;
let scoreG = 0;

function updateScore(team, points) {
    if (team === 'home') {
        scoreH += points;
        home.textContent = scoreH;
    } else if (team === 'guest') {
        scoreG += points;
        guest.textContent = scoreG;
    }
}

document.getElementById('add1H').addEventListener('click', () => updateScore('home', 1));
document.getElementById('add2H').addEventListener('click', () => updateScore('home', 2));
document.getElementById('add3H').addEventListener('click', () => updateScore('home', 3));

document.getElementById('add1G').addEventListener('click', () => updateScore('guest', 1));
document.getElementById('add2G').addEventListener('click', () => updateScore('guest', 2));
document.getElementById('add3G').addEventListener('click', () => updateScore('guest', 3));

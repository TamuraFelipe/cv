const btn = document.querySelector('.button');
const body = document.querySelector('html');

function moveOn(){
    btn.classList.toggle('turn-btn')
    body.classList.toggle('dark-mode');
}
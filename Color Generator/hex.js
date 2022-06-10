const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const text = document.querySelector('#color');

btn.addEventListener('click', function() {
    let hexCode='#';
    for(let i = 0;i < 6;i++) {
        hexCode += colors[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexCode;
    btn.style.backgroundColor = hexCode;
    text.textContent = hexCode;
})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

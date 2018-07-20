const min_hand = document.querySelector('.min');
const sec_hand = document.querySelector('.second');
const hour_hand = document.querySelector('.hour');
console.log(hour_hand);
//hour_hand.style.height = '30%';

function setDate(){
    const now = new Date();
    let seconds = now.getSeconds();
    let secondsDegree = (seconds/60) *360 +90;
    sec_hand.style.transform = `rotate(${secondsDegree}deg)`;
    let min = now.getMinutes();
    let minDegree = (min/60) *360 +90;
    min_hand.style.transform = `rotate(${minDegree}deg)`;
    let mins = now.getHours();
    let hoursDegree = (mins/12) *360 +90;
    hour_hand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate,1000);
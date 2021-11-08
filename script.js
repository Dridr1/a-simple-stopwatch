let cent = 0,
    sec = 0,    
    min = 0,
    hr = 0,
    lapn = 0,
    idInterval;
function start(){
    idInterval = setInterval(increaseTime, 10)
}
function increaseTime(){
    cent++;
    
    if(cent===100){
        cent = 0;
        sec++;
    }
    if(sec === 60){
        sec = 0;
        min++;
    }
    if(min === 60){
        min = 0;
        hr++;
    }
    document.querySelector('.time').innerHTML = `${(("00" + hr).slice(-2))}:${(("00" + min).slice(-2))}:${(("00" + sec).slice(-2))}:${(("00" + cent).slice(-2))}`;
}
function stop(){
    clearInterval(idInterval);
}
function lap(){
    lapn++;
    document.querySelector('.laps').innerHTML+=`<div class="lap">
                                                    <span class="lapn">Lap ${lapn}</span>
                                                    <span class="lap-time">${document.querySelector('.time').innerHTML}</span>
                                                </div>  `
}
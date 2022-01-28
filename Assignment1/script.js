
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let minutes = 00;
let seconds = 00;
let interval;
function startinterval(){
    clearInterval(interval);
    interval =setInterval(()=>{
        seconds++;
        if(seconds <= 9){
            sec.innerHTML = "0" + seconds;
        }
        if(seconds > 9)
        {
            sec.innerHTML = seconds
        }
        if(seconds > 99){
            minutes++;
            min.innerHTML = "0" + minutes;
            seconds = 0;
            sec.innerHTML = "0" + 0;
        }
        if(minutes > 9){
            min.innerHTML = minutes;
        }
        
    }, 10);
}

function stopInterval(){
    clearInterval(interval);
}

function resetInterval(){
    clearInterval(interval)
    minutes = "00";
    seconds = "00";
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    console.log(minutes, seconds);
}

start.addEventListener('click', startinterval);
reset.addEventListener('click', resetInterval);
stop.addEventListener('click', stopInterval);
